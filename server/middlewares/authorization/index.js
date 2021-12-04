const {
  isAuthorized,
  checkAccessToken,
} = require("../../utils/tokenFunctions");
const { User } = require("../../models");

const authorization = async (req, res, next) => {
  const { accesstoken } = req.headers;

  if (!accesstoken) {
    return res.status(401).send("Not exist token");
  }

  const accessTokenData = checkAccessToken(accesstoken);
  // const accessTokenData = isAuthorized(req);

  const userInfo = await User.findOne({
    where: { id: accessTokenData.id },
  });

  if (!userInfo) {
    return res.status(401).send("Not exist user");
  }

  if (accessTokenData.exp <= Date.now() / 1000) {
    return res.status(401).send("Expiration");
  }

  req.id = accessTokenData.id;
  next();
};

module.exports = authorization;
