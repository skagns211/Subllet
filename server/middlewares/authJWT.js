const { isAuthorized, checkRefreshToken } = require("../utils/tokenFunctions");
const redis = require("../utils/redis");
const { sign } = require("jsonwebtoken")

const authJWT = (req, res, next) => {
  const access = isAuthorized(req)
  const refreshToken = req.cookies.refreshToken;

  // 모두 만료
  if (!access) {
    if (!refresh) {
      return res.status(401).send("Unauthorized");
    } else {
      // accessToken만 만료

      const newAccessToken = sign()
    }
  } else {
    
  }
};

module.exports = authJWT;
