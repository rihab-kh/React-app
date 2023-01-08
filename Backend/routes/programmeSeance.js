const express = require("express");
const router = express.Router();
const controller = require("../controllers/programmeSeanceController");

const { protect, authorize } = require("../middleware/auth");

router.post(
  "/programme_seances",
  protect,
  authorize("coach"),
  controller.uploadImg,
  controller.addProgramme_seance
);
router.get("/programme_seances", protect, controller.getProgramme_seances);

router.get("/programme_seances/:id", protect, controller.getProgramme_seance);
router.put(
  "/programme_seances/:id",
  protect,
  authorize("coach"),
  controller.updateProgramme_seance
);
router.delete(
  "/programme_seances/:id",
  protect,
  authorize("coach"),
  controller.deleteProgramme_seance
);

module.exports = router;
