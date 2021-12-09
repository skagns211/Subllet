const express = require("express");
const router = express.Router();
const controllers = require("../controllers/services");

router.get("/", controllers.services.get);
router.get("/:id", controllers.service.get);

module.exports = router;
