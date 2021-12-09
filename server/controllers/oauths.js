require("dotenv").config();
const axios = require("axios");
const { User } = require("../models");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/tokenFunctions");
const emailSend = require("../utils/emails/send");
const { emailVerify } = require("../utils/emails/content");

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
        const redirect_uri =
          process.env.CLIENT_ORIGIN + "/auth/google/callback";
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

          return res.json({ userInfo, accessToken, refreshToken });
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
        // console.log(authorizationCode);
        const client_id = process.env.NAVER_CLIENT_ID;
        const client_secret = process.env.NAVER_SECRET;
        const endPoint = "https://nid.naver.com/oauth2.0/token";
        const grant_type = "authorization_code";
        // const state = Math.random().toString(36).slice(2);
        const state = "1234567";

        const url = `${endPoint}?grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}&code=${authorizationCode}&state=${state}`;
        const response = await axios.post(url);
        const { access_token } = response.data;
        console.log(access_token);
        const NaverUserInfo = await axios.get(
          "https://openapi.naver.com/v1/nid/me",
          { headers: { Authorization: `Bearer ${access_token}` } }
        );
        console.log(NaverUserInfo.data);

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

          return res.json({ userInfo, accessToken, refreshToken });
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
        const redirect_uri = process.env.CLIENT_ORIGIN + "/auth/kakao/callback";
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

          return res.json({ userInfo, accessToken, refreshToken });
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

      try {
        return res.status(201).json({ userInfo, accessToken, refreshToken });
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
  },
};
