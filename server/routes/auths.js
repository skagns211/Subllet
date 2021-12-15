const express = require("express");
const router = express.Router();
const controllers = require("../controllers/auths");
const emailRedirection = require("../middlewares/emailRedirection");
const authorization = require("../middlewares/authorization");

router.post("/signup", controllers.signup.post);
router.post("/login", controllers.login.post, emailRedirection);
router.post("/logout", authorization, controllers.logout.post);
router.post("/email", controllers.email.post);
router.post("/nickname", controllers.nickname.post);
router.post("/refresh", authorization, controllers.refresh.post);
router.get("/confirm/email", controllers.confirm.get);

module.exports = router;
