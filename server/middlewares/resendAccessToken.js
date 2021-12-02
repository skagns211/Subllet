const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/tokenFunctions");
const redis = require("../utils/redis");
const { User } = require("../models");

// 이 부분은 따로 API로 작성해야 할 것 같다.
const resendAccessToken = (req, res, next) => {
  const authorization = req.headers["authorization"];

  if (!authorization) {
    return res.status(401).send("토큰이 존재하지 않음");
  }

  const token = authorization.split(" ")[1];

  const { decode } = verify(token, process.env.REFRESH_SECRET);

  const comparedToken = await redis.get(`${decode}`);

  if (token !== comparedToken) {
    return res.status(401).send("토큰이 일치하지 않음.");
  }

  const userInfo = await User.findOne({
    where: { id: decode },
  });
  const userId = userInfo.dataValues.id;
  delete userInfo.dataValues.password;
  delete userInfo.dataValues.salt;
  const accessToken = generateAccessToken(userInfo.dataValues);
  const refreshToken = generateRefreshToken(userId);

  await redis.set(userInfo.id, refreshToken, "ex", 1209600);

  try {
    res.json({ accessToken, refreshToken });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = resendAccessToken;
