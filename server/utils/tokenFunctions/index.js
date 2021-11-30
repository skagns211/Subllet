const { sign, verify } = require("jsonwebtoken");
const redisClient = require("../redis");
require("dotenv").config();

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "30m" });
  },
  generateRefreshToken: () => {
    return sign({}, process.env.REFRESH_SECRET, { expiresIn: "1d" });
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
};
