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
          console.log(err);
        }
      }
    },
  },
  login: {
    post: async (req, res) => {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).send("Empty body");
      } else {
        const userInfo = await User.findOne({
          attributes: ["id", "email", "password", "nickname", "profile"],
          where: { email },
        });

        if (!userInfo) {
          res.status(400).send("Email Inconsistency");
        } else {
          const result = await checkPassword(password, userInfo.password);

          if (!result) {
            res.status(400).send("Password Inconsistency");
          } else {
            delete userInfo.dataValues.password;
            delete userInfo.dataValues.salt;
            const securityInfo = userInfo.dataValues;
            const accessToken = generateAccessToken(securityInfo);
            const refreshToken = generateRefreshToken();

            // redisClient.set(userInfo.id, DEFAULT_EXPIRATION, refreshToken);
            redisClient.set("c", "d");

            try {
              res.json({ securityInfo, accessToken, refreshToken });
            } catch (err) {
              console.log(err);
            }
          }
        }
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
      const checkEmail = await User.findOne({
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
      const checkNickname = await User.findOne({
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
