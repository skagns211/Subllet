const express = require("express");
const router = express.Router();
const controllers = require("../controllers/users");

router.patch("/pwd", controllers.password.patch);
router.patch("/", controllers.user.patch);
router.post("/", controllers.user.post);
router.post("/nickname", controllers.nickname.post);

module.exports = router;