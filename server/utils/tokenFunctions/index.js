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
  // checkRefreshToken: (req) => {
  //   const authorization = req.headers["authorization"];
  //   if (!authorization) {
  //     return null;
  //   }
  //   const token = authorization.split(" ")[1];

  //   const { decode } = verify(token, process.env.REFRESH_SECRET);

  //   redis.get(`${decode}`, (err, result) => {
  //     if (result) {
  //       return decode;
  //     } else {
  //       return null;
  //     }
  //   });
  // },
};
