require("dotenv").config();
const axios = require("axios");
const { User } = require("../users");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../utils/tokenFunctions");

module.exports = {
  google: {
    post: async (req, res) => {
      try {
        const { authorizationCode } = req.body;
        if (!authorizationCode) {
          return res.status(400).send();
        }

        const client_id = process.env.CLIENT_ID;
        const client_secret = process.env.CLIENT_SECRET;
        const endPoint = "https://oauth2.googleapis.com/token";
        const grant_type = "authorization_code";
        const redirect_uri = "https://localhost:3000";

        //   const client_url = `https://accounts.google.com/o/oauth2/v2/auth?&access_type=offline&redirect_uri=${redirect_uri}client_id=${client_id}`;
        //   const givemecode = await axios.post(client_url);
        //   console.log(givemecode);

        const url = `${endPoint}?code=${authorizationCode}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&grant_type=${grant_type}`;

        const response = await axios.post(url);
        const { token } = response.data;

        const googleUserInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v1/userinfo",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const { email, given_name } = googleUserInfo.data;
        const userInfo = await User.findOne({
          where: { email },
        });

        if (!userInfo) {
          const newUserInfo = await User.create({
            email,
            nickname: given_name,
          });

          delete newUserInfo.dataValues.password;
          delete newUserInfo.dataValues.salt;

          const accessToken = generateAccessToken(newUserInfo.dataValues);
          const refreshToken = generateRefreshToken();

          return res
            .status(201)
            .json({ userInfo: newUserInfo, accessToken, refreshToken });
        } else {
          delete UserInfo.dataValues.password;
          delete UserInfo.dataValues.salt;

          const accessToken = generateAccessToken(UserInfo.dataValues);
          const refreshToken = generateRefreshToken();
          return res.json({ userInfo, accessToken, refreshToken });
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
  naver: {
    post: async (req, res) => {},
  },
  kakao: {
    post: async (req, res) => {},
  },
};
