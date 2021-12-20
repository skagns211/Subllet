const {
  generateSalt,
  hashPassword,
  checkPassword,
  generateEmailKey,
} = require("../utils/secure");
const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require("../utils/tokenFunctions");
const { User } = require("../models");
require("dotenv").config();
const redis = require("../utils/redis");
const emailSend = require("../utils/emails/send");
const { emailVerify } = require("../utils/emails/content");

module.exports = {
  signup: {
    post: async (req, res) => {
      const { email, nickname, password } = req.body;
      if (!email || !nickname || !password) {
        return res.status(400).send("Empty body");
      }

      const emailKey = await generateEmailKey();
      const salt = await generateSalt();
      const hashedPassword = await hashPassword(password, salt);

      console.log(hashPassword);
      await User.create({
        email,
        password: hashedPassword,
        nickname,
        email_key: emailKey,
        signup_method: "Normal",
      });

      const url =
        process.env.SERVER_ORIGIN + "/auth/confirm/email?key=" + emailKey;

      const emailContent = emailVerify(email, nickname, url);
      emailSend(emailContent);

      try {
        res.status(201).send("Signup success");
      } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
      }
    },
  },
  login: {
    post: async (req, res, next) => {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).send("Empty body");
      }

      const userInfo = await User.findOne({
        where: { email },
      });

      if (!userInfo || userInfo.signup_method !== "Normal") {
        return res.status(404).send("Non-existent account");
      }

      if (!userInfo.email_verified) {
        req.id = userInfo.id;
        next();
        return;
      }

      const result = await checkPassword(password, userInfo.password);

      if (!result) {
        return res.status(400).send("Password inconsistency");
      }

      delete userInfo.dataValues.password;
      const accessToken = generateAccessToken(userInfo.dataValues);
      const refreshToken = generateRefreshToken(userInfo.id);

      await redis.set(userInfo.id, refreshToken, "ex", 1209600);

      sendAccessToken(res, accessToken);
      sendRefreshToken(res, refreshToken);

      try {
        return res.json({ userInfo: userInfo.dataValues });
      } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
      }
    },
  },
  logout: {
    post: async (req, res) => {
      const { id } = req.body;
      await redis.del(id);

      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");

      try {
        res.send("Logout success");
      } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
      }
    },
  },
  email: {
    post: async (req, res) => {
      const { email } = req.body;

      if (!email) {
        return res.status(400).send("Empty body");
      }

      const checkEmail = await User.findOne({
        where: { email },
      });

      if (checkEmail) {
        return res.status(400).send("Overlap");
      }

      try {
        res.send("Ok");
      } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
      }
    },
  },
  nickname: {
    post: async (req, res) => {
      const { nickname } = req.body;

      if (!nickname) {
        return res.status(400).send("Empty body");
      }

      const checkNickname = await User.findOne({
        where: { nickname },
      });

      if (checkNickname) {
        return res.status(400).send("Overlap");
      }

      try {
        res.send("Ok");
      } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
      }
    },
  },
  confirm: {
    get: async (req, res) => {
      try {
        const { key } = req.query;

        const findUser = await User.findOne({
          where: { email_key: key },
        });

        if (!findUser) {
          return res.status(404).send("Not found");
        }

        if (findUser.email_verified) {
          return res.status(400).send("Already confirm");
        }

        const currentTime = new Date().getTime();
        const signupDate = new Date(findUser.updatedAt).getTime();

        if (signupDate + 180000 < currentTime) {
          return res.status(401).send("Expiration");
        }

        await User.update(
          {
            email_verified: true,
          },
          {
            where: { email_key: key },
          }
        );

        const url = `${process.env.CLIENT_ORIGIN}/main`;
        res.redirect(url);
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
  },
};
