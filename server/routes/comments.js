const express = require("express");
const router = express.Router();
const controllers = require("../controllers/comments");

router.post("/:serviceId", controllers.comment.post);
router.delete("/:id", controllers.comment.delete);

module.exports = router;
