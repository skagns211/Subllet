var express = require('express');
var router = express.Router();
const authsRouter = require("./auths");
const usersRouter = require("./users");
const servicesRouter = require("./services");
const commentsRouter = require("./comments");
const subscribesRouter = require("./subscribes");
const scrapsRouter = require("./scraps");
const askingsRouter = require("./askings");
const replysRouter = require("./replys");

router.use("/auth", authsRouter);
router.use("/user", usersRouter);
router.use("/service", servicesRouter);
router.use("/comment", commentsRouter);
router.use("/subscribe", subscribesRouter);
router.use("/scrap", scrapsRouter);
router.use("/asking", askingsRouter);
router.use("/reply", replysRouter);

module.exports = router;
