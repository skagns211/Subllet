const { sign, verify } = require("jsonwebtoken");
const redis = require("../redis");
require("dotenv").config();

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "30m" });
  },
  generateRefreshToken: (data) => {
    return sign({ data }, process.env.REFRESH_SECRET, { expiresIn: "14d" });
  },
  isAuthorized: (req) => {
    const authorization = req.headers["authorization"];
    if (!authorization) {
      return null;
    }
    const token = authorization.split(" ")[1];
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },
  sendRefreshToken: (res, refreshToken) => {
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });
  },
};
