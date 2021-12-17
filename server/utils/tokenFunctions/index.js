const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "30m" });
  },
  generateRefreshToken: (data) => {
    return sign({ data }, process.env.REFRESH_SECRET, {
      expiresIn: "14d",
    });
  },
  sendAccessToken: (res, accessToken) => {
    return res.cookie("accessToken", accessToken, {
      httpOnly: true,
      samesite: "none",
      secure: true,
    });
  },
  sendRefreshToken: (res, refreshToken) => {
    return res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      samesite: "none",
      secure: true,
    });
  },
  checkAccessToken: (accessToken) => {
    try {
      return verify(accessToken, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },
  checkRefeshToken: (refreshToken) => {
    try {
      return verify(refreshToken, process.env.REFRESH_SECRET);
    } catch (err) {
      return null;
    }
  },
};
