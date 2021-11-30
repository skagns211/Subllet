const express = require("express");
const router = express.Router();
const controllers = require("../controllers/services");
// const authJWT = require("../middlewares/authJWT")

router.get("/", controllers.services.get);
router.get("/:id", controllers.service.get);

module.exports = router;
