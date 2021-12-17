const express = require("express");
const router = express.Router();
const controllers = require("../controllers/auths");
const emailRedirection = require("../middlewares/emailRedirection");

router.post("/signup", controllers.signup.post);
router.post("/login", controllers.login.post, emailRedirection);
router.post("/logout", controllers.logout.post);
router.post("/email", controllers.email.post);
router.post("/nickname", controllers.nickname.post);
router.get("/confirm/email", controllers.confirm.get);

module.exports = router;
