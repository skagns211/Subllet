const {
  generateSalt,
  hashPassword,
  checkPassword,
  generateEmailKey,
} = require("../utils/secure");
const {
  generateAccessToken,
  generateRefreshToken,
  isAuthorized,
  checkRefeshToken,
  checkAccessToken,
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
    post: async (req, res, next) => {
      const { email, nickname, password } = req.body;
      if (!email || !nickname || !password) {
        return res.status(400).send("Empty body");
      }

      const emailKey = await generateEmailKey();
      const salt = await generateSalt();
      const hashedPassword = await hashPassword(password, salt);

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

      // if (!userInfo.email_verified) {
      //   req.id = userInfo.id;
      //   next();
      //   return;
      // }

      const result = await checkPassword(password, userInfo.password);

      if (!result) {
        return res.status(400).send("Password inconsistency");
      }
      const userId = userInfo.id;
      delete userInfo.dataValues.password;
      const accessToken = generateAccessToken(userInfo.dataValues);
      const refreshToken = generateRefreshToken(userId);

      await redis.set(userInfo.id, refreshToken, "ex", 1209600);

      sendAccessToken(res, accessToken);
      sendRefreshToken(res, refreshToken);

      try {
        return res.json({
          userInfo: userInfo.dataValues,
          // accessToken,
          // refreshToken,
        });
      } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
      }
    },
  },
  logout: {
    post: async (req, res) => {
      // console.log(req.headers);
      // const { id } = isAuthorized(req);
      // const { accessToken } = req.cookies;
      // const accessTokenData = checkAccessToken(accessToken);
      // console.log(req);
      // console.log(accessToken);
      // console.log(accessTokenData);
      const id = req.id;

      await redis.del(id);

      res.cookie("accessToken", null, { maxAge: 0 });
      res.cookie("refreshToken", null, { maxAge: 0 });

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
  render: {
    get: async (req, res) => {
      try {
        res.send("Ok");
      } catch (err) {
        res.status(500).send("Server error");
      }
    },
  },
  refresh: {
    post: async (req, res) => {
      // const { accesstoken, refreshtoken } = req.headers;
      const { accessToken, refreshToken } = req.cookies;
      console.log(req.cookies);
      console.log(accessToken);
      console.log(refreshToken);

      if (!accessToken || !refreshToken) {
        return res.status(400).send("Not exist token");
      }

      const accessTokenData = checkAccessToken(accessToken);
      const refreshTokenData = checkRefeshToken(refreshToken);
      console.log(accessTokenData);
      console.log(new Date());
      if (refreshTokenData === null) {
        return res.status(401).send("Expiration");
      }

      // if (accessTokenData.id !== refreshTokenData.data) { // id를 못찾음
      //   return res.status(401).send("UserId inconsistency");
      // }

      const redisRefreshToken = await redis.get(`${accessTokenData.id}`);

      if (refreshToken !== redisRefreshToken) {
        return res.status(401).send("RefreshToken inconsistency");
      }

      const userInfo = await User.findOne({
        where: { id: accessTokenData.id },
      });

      if (!userInfo) {
        return res.status(401).send("Not exist user");
      }

      delete userInfo.dataValues.password;
      delete userInfo.dataValues.salt;
      const newAccessToken = generateAccessToken(userInfo.dataValues);

      // sendAccessToken(res, newAccessToken);

      try {
        sendAccessToken(res, newAccessToken);
        res.send("Success");
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

        const url = process.env.CLIENT_ORIGIN;
        res.redirect(url);
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
  },
};
