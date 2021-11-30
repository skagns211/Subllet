const {
  generateSalt,
  hashPassword,
  checkPassword,
} = require("../../utils/secure");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../utils/tokenFunctions");
const { User } = require("../../models");
require("dotenv").config();
const redisClient = require("../../utils/redis");
const { restart } = require("nodemon");
const DEFAULT_EXPIRATION = 3600;

module.exports = {
  signup: {
    post: async (req, res) => {
      const { email, nickname, password } = req.body;
      if (!email || !nickname || !password) {
        return res.status(400).send("Empty body");
      } else {
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

      delete userInfo.dataValues.password;
      delete userInfo.dataValues.salt;
      const accessToken = generateAccessToken(userInfo.dataValues);
      const refreshToken = generateRefreshToken();

      // redisClient.set(userInfo.id, refreshToken);
      // redisClient.set("c", "d");

      try {
        res.json({
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
      // const refreshToken = req.headers.authorization;
      // await RT.destroy({
      //   where: { refreshToken },
      // });

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
        return res.statue(400).send("Overlap");
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
