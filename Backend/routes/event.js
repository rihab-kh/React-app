const express = require("express");
const router = express.Router();
const controller = require("../controllers/eventController");
const multer = require("../uploads/multer-config-event");

const { protect, authorize } = require("../middleware/auth");

router.post("/event", protect, multer, controller.addEvent);
router.get("/event", protect, controller.getEvents);
router.get("/event/:id", protect, controller.getEvents);
router.put(
  "/event/:id",
  protect,
  authorize("coach"),
  multer,
  controller.updateEvent
);
router.delete(
  "/event/:id",
  protect,
  authorize("coach"),
  controller.deleteEvent
);
router.get(
  "/event/joueurs/:id",
  protect,
  authorize("coach"),
  controller.findAllJoueur
);

module.exports = router;
