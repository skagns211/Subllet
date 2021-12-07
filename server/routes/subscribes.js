const express = require("express");
const router = express.Router();
const controllers = require("../controllers/subscribes");

router.get("/", controllers.subscribe.get);
router.post("/:serviceId", controllers.subscribe.post);
router.patch("/:id", controllers.subscribe.patch);
router.delete("/:id", controllers.subscribe.delete);
router.get("/:serviceId", controllers.isSubscribe.get)

module.exports = router;
