const express = require("express");
const router = express.Router();
const controllers = require("../controllers/oauths");
const authorization = require("../middlewares/authorization");

router.post("/google", controllers.google.post);
router.post("/naver", controllers.naver.post);
router.post("/kakao", controllers.kakao.post);
router.post("/signup", controllers.signup.post);
router.post("/delete", authorization, controllers.delete.post);

module.exports = router;
