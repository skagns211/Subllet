const express = require("express");
const router = express.Router();
const controllers = require("../controllers/scraps");

router.get("/", controllers.scrap.get);
router.post("/:serviceId", controllers.scrap.post);
router.delete("/:serviceId", controllers.scrap.delete);

module.exports = router;
