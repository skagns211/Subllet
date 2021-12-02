const {
  generateSalt,
  hashPassword,
  checkPassword,
} = require("../../utils/secure");
const {
  generateAccessToken,
  generateRefreshToken,
  isAuthorized,
} = require("../../utils/tokenFunctions");
const { User } = require("../../models");
require("dotenv").config();
const redis = require("../../utils/redis");

module.exports = {
  signup: {
    post: async (req, res) => {
      const { email, nickname, password } = req.body;
      if (!email || !nickname || !password) {
        return res.status(400).send("Empty body");
      }
      const salt = await generateSalt();
      const hashedPassword = await hashPassword(password, salt);

      await User.create({
        email,
        password: hashedPassword,
        salt,
        nickname,
      });

      try {
        res.send("signup success");
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
  },
  login: {
    post: async (req, res) => {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).send("Empty body");
      }

      const userInfo = await User.findOne({
        attributes: ["id", "email", "password", "nickname", "profile"],
        where: { email },
      });

      if (!userInfo) {
        return res.status(400).send("Non-existent account");
      }

      const result = await checkPassword(
        password,
        userInfo.dataValues.password
      );

      if (!result) {
        return res.status(400).send("Password inconsistency");
      }
      const userId = userInfo.dataValues.id;
      delete userInfo.dataValues.password;
      delete userInfo.dataValues.salt;
      const accessToken = generateAccessToken(userInfo.dataValues);
      const refreshToken = generateRefreshToken(userId);

      // await tedis.set(userInfo.id, refreshToken)
      // console.log(await tedis.get(userInfo.id))
      // redisClient.set(userInfo.id, refreshToken);
      await redis.set(userInfo.id, refreshToken, "ex", 1209600);

      try {
        return res.json({
          userInfo: userInfo.dataValues,
          accessToken,
          refreshToken,
        });
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
  },
  logout: {
    post: async (req, res) => {
      const { id } = isAuthorized(req);

      redis.del(id);

      try {
        res.send("Logout success");
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
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
        return res.status(500).send("Server error");
      }
    },
  },
};
