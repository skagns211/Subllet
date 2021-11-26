const express = require("express");
const router = express.Router();
const controllers = require("../controllers/askings");

router.get("/", controllers.asking.get);
router.post("/", controllers.asking.post);
router.delete("/:id", controllers.asking.delete);

module.exports = router;
