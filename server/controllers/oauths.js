require("dotenv").config();
const axios = require("axios");
const { User } = require("./users");
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

        const response = await axios.post(url);
        const { access_token } = response.data;

        const googleUserInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v1/userinfo",
          { headers: { Authorization: `Bearer ${access_token}` } }
        );

        const { email, given_name, picture } = googleUserInfo.data;

        const userInfo = await User.findOne({
          where: { email },
        });

        if (!userInfo || userInfo.signup_method !== "Google") {
          const newUserInfo = await User.create({
            email,
            nickname: given_name,
            profile: picture,
            signup_method: "Google",
            email_verified: true,
          });

          const userId = newUserInfo.dataValues.id;
          delete newUserInfo.dataValues.password;

          const accessToken = generateAccessToken(newUserInfo.dataValues);
          const refreshToken = generateRefreshToken(userId);

          return res
            .status(201)
            .json({ userInfo: newUserInfo, accessToken, refreshToken });
        }

        delete UserInfo.dataValues.password;
        const userId = UserInfo.dataValues.id;
        const accessToken = generateAccessToken(UserInfo.dataValues);
        const refreshToken = generateRefreshToken(userId);
        return res.json({ userInfo, accessToken, refreshToken });
      } catch (err) {
        console.error(err);
        return res.status(400).json(err.response.data.error);
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
        const state = Math.random().toString(36).slice(2);

        const url = `${endPoint}?grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}&code=${authorizationCode}&state=${state}`;
        const response = await axios.post(url);
        const { access_token } = response.data;

        const NaverUserInfo = await axios.get(
          "https://openapi.naver.com/v1/nid/me",
          { headers: { Authorization: `Bearer ${access_token}` } }
        );

        const { email, nickname, profile_image } = NaverUserInfo.data;

        const userInfo = await User.findOne({
          where: { email },
        });

        if (!userInfo || userInfo.signup_method !== "Naver") {
          const newUserInfo = await User.create({
            email,
            nickname,
            profile: profile_image,
            signup_method: "Naver",
            email_verified: true,
          });

          const userId = newUserInfo.dataValues.id;
          delete newUserInfo.dataValues.password;

          const accessToken = generateAccessToken(newUserInfo.dataValues);
          const refreshToken = generateRefreshToken(userId);

          return res
            .status(201)
            .json({ userInfo: newUserInfo, accessToken, refreshToken });
        }

        delete UserInfo.dataValues.password;
        const userId = UserInfo.dataValues.id;
        const accessToken = generateAccessToken(UserInfo.dataValues);
        const refreshToken = generateRefreshToken(userId);
        return res.json({ userInfo, accessToken, refreshToken });
      } catch (err) {
        console.error(err);
        return res.status(400).json(err.response.data.error);
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
        const client_secret = process.env.KAKAO_CLIENT_SECRET;
        const endPoint = "kauth.kakao.com/oauth/token";
        const grant_type = "authorization_code";
        const redirect_uri = process.env.CLIENT_ORIGIN + "/auth/kakao/callback";
        const url = `${endPoint}?code=${authorizationCode}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&grant_type=${grant_type}`;

        const response = await axios.post(url);
        const { access_token } = response.data;

        const KakaoUserInfo = await axios.get(
          "https://kapi.kakao.com/v2/user/me",
          { headers: { Authorization: `Bearer ${access_token}` } }
        );

        const { email, profile } = KakaoUserInfo.data;

        const userInfo = await User.findOne({
          where: { email },
        });

        if (!userInfo || userInfo.signup_method !== "Kakao") {
          const newUserInfo = await User.create({
            email,
            nickname: profile.nickname,
            profile: profile.profile_image_url,
            signup_method: "Kakao",
            email_verified: true,
          });

          const userId = newUserInfo.dataValues.id;
          delete newUserInfo.dataValues.password;

          const accessToken = generateAccessToken(newUserInfo.dataValues);
          const refreshToken = generateRefreshToken(userId);
      
          return res
            .status(201)
            .json({ userInfo: newUserInfo, accessToken, refreshToken });
        }

        delete UserInfo.dataValues.password;
        const userId = UserInfo.dataValues.id;
        const accessToken = generateAccessToken(UserInfo.dataValues);
        const refreshToken = generateRefreshToken(userId);
        return res.json({ userInfo, accessToken, refreshToken });
      } catch (err) {
        console.error(err);
        return res.status(400).json(err.response.data.error);
      }
    },
  },
};
