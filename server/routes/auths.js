const express = require("express");
const router = express.Router();
const controllers = require("../controllers/auths");

router.post("/signup", controllers.signup.post);
router.post("/login", controllers.login.post);
router.post("/logout", controllers.logout.post);
router.post("/email", controllers.email.post);
router.post("/nickname", controllers.nickname.post);

module.exports = router;
