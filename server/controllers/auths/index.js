const { user, RT } = require("../../models");
const { sign } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  signup: {
    post: async (req, res) => {
      const { email, nickname, password } = req.body;
      if (!email || !nickname || !password) res.send("Empty body");

      await user.create({
        email,
        nickname,
        password,
      });

      try {
        res.send("signup success");
      } catch (err) {
        console.log(err);
      }
    },
  },
  login: {
    post: async (req, res) => {
      const { email, password } = req.body;
      const userInfo = await user.findOne({
        where: {
          email,
          password,
        },
      });

      if (!email || !password) return res.send("Empty body");
      if (!userInfo) return res.send("Inconsistency");

      delete userInfo.dataValues.password;
      const securityInfo = userInfo.dataValues;
      const accessToken = sign(securityInfo, process.env.ACCESS_SECRET, {
        expiresIn: "30m",
      });
      const refreshToken = sign(securityInfo, process.env.REFRESH_SECRET, {
        expiresIn: "7d",
      });

      await RT.create({
        refreshToken,
      });

      try {
        res.send({ userInfo: { ...securityInfo }, accessToken, refreshToken });
      } catch (err) {
        console.log(err);
      }
    },
  },
  logout: {
    post: async (req, res) => {
      const refreshToken = req.headers.authorization;
      await RT.destroy({
        where: { refreshToken },
      });

      try {
        res.send("Logout Success");
      } catch (err) {
        console.log(err);
      }
    },
  },
  email: {
    post: async (req, res) => {
      const { email } = req.body;
      const checkEmail = await user.findOne({
        where: { email },
      });

      if (!email) return res.send("Empty body");
      if (checkEmail) return res.send("Overlap");

      try {
        res.send("OK");
      } catch (err) {
        console.log(err);
      }
    },
  },
  nickname: {
    post: async (req, res) => {
      const { nickname } = req.body;
      const checkNickname = await user.findOne({
        where: { nickname },
      });

      if (!nickname) return res.send("Empty body");
      if (checkNickname) return res.send("Overlap");

      try {
        res.send("OK");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
