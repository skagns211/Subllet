const express = require("express");
const router = express.Router();
const controllers = require("../controllers/users");
const authorization = require("../middlewares/authorization");

router.patch("/pwd", controllers.password.patch);
router.patch("/", authorization, controllers.user.patch);
router.post("/", controllers.user.post);
router.post("/nickname", controllers.nickname.post);

module.exports = router;
