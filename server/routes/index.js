var express = require("express");
var router = express.Router();
const authsRouter = require("./auths");
const usersRouter = require("./users");
const servicesRouter = require("./services");
const commentsRouter = require("./comments");
const subscribesRouter = require("./subscribes");
const scrapsRouter = require("./scraps");
const oauthsRouter = require("./oauths");
const authorization = require("../middlewares/authorization");

router.use("/auth", authsRouter);
router.use("/user", authorization, usersRouter);
router.use("/service", servicesRouter);
router.use("/comment", authorization, commentsRouter);
router.use("/subscribe", authorization, subscribesRouter);
router.use("/scrap", authorization, scrapsRouter);
router.use("/oauth", oauthsRouter);

module.exports = router;
