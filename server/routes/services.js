const express = require("express");
const router = express.Router();
const controllers = require("../controllers/services");

router.get("/", controllers.service.get);
// router.get("/:id", controllers.service.get);

module.exports = router;
