require("dotenv").config();
const axios = require("axios");
const { User, Service, Comment, Scrap, Subscribe } = require("../models");
const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require("../utils/tokenFunctions");
const redis = require("../utils/redis");

module.exports = {
  google: {
    post: async (req, res) => {
      try {
        const { authorizationCode } = req.body;
        if (!authorizationCode) {
          return res.status(400).send("Bad request");
        }

        const client_id = process.env.GOOGLE_CLIENT_ID;
        const client_secret = process.env.GOOGLE_SECRET;
        const endPoint = "https://oauth2.googleapis.com/token";
        const grant_type = "authorization_code";
        const redirect_uri = process.env.CLIENT_ORIGIN + "/auth/google/signup";
        const url = `${endPoint}?code=${authorizationCode}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&grant_type=${grant_type}`;

        const response = await axios({
          method: "POST",
          url,
          headers: {
            "content-type": "application/x-www-form-urlencoded",
          },
        });

        const { access_token } = response.data;

        const googleUserInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v1/userinfo",
          { headers: { Authorization: `Bearer ${access_token}` } }
        );

        const { email, picture } = googleUserInfo.data;
        const userInfo = await User.findOne({
          where: { email },
        });

        if (!userInfo) {
          return res.json({
            email,
            profile: picture,
            signup_method: "Google",
          });
        }

        if (userInfo.signup_method === "Google") {
          const userId = userInfo.dataValues.id;
          delete userInfo.dataValues.password;

          const accessToken = generateAccessToken(userInfo.dataValues);
          const refreshToken = generateRefreshToken(userId);

          await redis.set(userInfo.id, refreshToken, "ex", 1209600);

          sendAccessToken(res, accessToken);
          sendRefreshToken(res, refreshToken);

          return res.json({ userInfo });
        } else {
          return res
            .status(400)
            .json({ signup_method: userInfo.signup_method });
        }
      } catch (err) {
        console.error(err);
        return res.status(400).json("Client error");
      }
    },
  },
  naver: {
    post: async (req, res) => {
      try {
        const { authorizationCode } = req.body;
        if (!authorizationCode) {
          return res.status(400).send("Bad request");
        }

        const client_id = process.env.NAVER_CLIENT_ID;
        const client_secret = process.env.NAVER_SECRET;
        const endPoint = "https://nid.naver.com/oauth2.0/token";
        const grant_type = "authorization_code";
        const state = "1234567";

        const url = `${endPoint}?grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}&code=${authorizationCode}&state=${state}`;
        const response = await axios.post(url);
        const { access_token } = response.data;
   
        const NaverUserInfo = await axios.get(
          "https://openapi.naver.com/v1/nid/me",
          { headers: { Authorization: `Bearer ${access_token}` } }
        );

        const { email, profile_image } = NaverUserInfo.data.response;
        const userInfo = await User.findOne({
          where: { email },
        });

        if (!userInfo) {
          return res.json({
            email,
            profile: profile_image,
            signup_method: "Naver",
          });
        }

        if (userInfo.signup_method === "Naver") {
          const userId = userInfo.dataValues.id;
          delete userInfo.dataValues.password;

          const accessToken = generateAccessToken(userInfo.dataValues);
          const refreshToken = generateRefreshToken(userId);

          await redis.set(userInfo.id, refreshToken, "ex", 1209600);

          sendAccessToken(res, accessToken);
          sendRefreshToken(res, refreshToken);

          return res.json({ userInfo });
        } else {
          return res
            .status(400)
            .json({ signup_method: userInfo.signup_method });
        }
      } catch (err) {
        console.error(err);
        return res.status(400).json("Client error");
      }
    },
  },
  kakao: {
    post: async (req, res) => {
      try {
        const { authorizationCode } = req.body;
        if (!authorizationCode) {
          return res.status(400).send("Bad request");
        }

        const client_id = process.env.KAKAO_CLIENT_ID;
        const client_secret = process.env.KAKAO_SECRET;
        const endPoint = "https://kauth.kakao.com/oauth/token";
        const grant_type = "authorization_code";
        const redirect_uri = process.env.CLIENT_ORIGIN + "/auth/kakao/signup";
        const url = `${endPoint}?code=${authorizationCode}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&grant_type=${grant_type}`;

        const response = await axios({
          method: "POST",
          url,
          headers: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        });

        const { access_token } = response.data;

        const KakaoUserInfo = await axios({
          method: "GET",
          url: "https://kapi.kakao.com/v2/user/me",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        });

        const { email, profile } = KakaoUserInfo.data.kakao_account;
        const userInfo = await User.findOne({
          where: { email },
        });

        if (!userInfo) {
          return res.json({
            email,
            profile: profile.profile_image_url,
            signup_method: "Kakao",
          });
        }

        if (userInfo.signup_method === "Kakao") {
          const userId = userInfo.dataValues.id;
          delete userInfo.dataValues.password;

          const accessToken = generateAccessToken(userInfo.dataValues);
          const refreshToken = generateRefreshToken(userId);

          await redis.set(userInfo.id, refreshToken, "ex", 1209600);

          sendAccessToken(res, accessToken);
          sendRefreshToken(res, refreshToken);

          return res.json({ userInfo });
        } else {
          return res
            .status(400)
            .json({ signup_method: userInfo.signup_method });
        }
      } catch (err) {
        console.error(err);
        return res.status(400).json("Client error");
      }
    },
  },
  signup: {
    post: async (req, res) => {
      const { email, nickname, profile, signup_method } = req.body;

      if (!email || !nickname || !profile || !signup_method) {
        return res.status(400).send("Empty body");
      }

      const userInfo = await User.create({
        email,
        nickname,
        profile,
        signup_method: signup_method,
        email_verified: true,
      });

      const userId = userInfo.dataValues.id;
      delete userInfo.dataValues.password;

      const accessToken = generateAccessToken(userInfo.dataValues);
      const refreshToken = generateRefreshToken(userId);

      sendAccessToken(res, accessToken);
      sendRefreshToken(res, refreshToken);
      try {
        return res.status(201).json({ userInfo });
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
  },
  delete: {
    post: async (req, res) => {
      const id = req.id;
      const { message } = req.body;

      if (!message) {
        return res.status(400).send("Empty body");
      }

      if (message !== "회원탈퇴") {
        return res.status(400).send("Bad request");
      }

      const subscribe = await Subscribe.findOne({
        where: { user_id: id },
      });

      if (subscribe) {
        await Subscribe.destroy({
          where: { user_id: id },
        });
      }

      const scrap = await Scrap.findOne({
        where: { user_id: id },
      });

      if (scrap) {
        await Scrap.destroy({
          where: { user_id: id },
        });
      }

      const comment = await Comment.findOne({
        where: { user_id: id },
      });

      if (comment) {
        const service = await Service.findOne({
          where: { id: comment.service_id },
        });

        if (comment.likes === true) {
          await Service.update(
            {
              total_likes: service.total_likes - 1,
            },
            {
              where: { id: service.id },
            }
          );
        }
        await Comment.destroy({
          where: { user_id: id },
        });
      }

      await User.destroy({
        where: { id },
      });

      try {
        return res.status(204).send("Success");
      } catch (err) {
        console.error(err);
      }
    },
  },
};
