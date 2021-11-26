const express = require("express");
const router = express.Router();
const controllers = require("../controllers/replys");

router.post("/:askingId", controllers.reply.post);
router.delete("/:id", controllers.reply.delete);

module.exports = router;