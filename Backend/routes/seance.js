const express = require("express");
const router = express.Router();
const controller = require("../controllers/seanceController");
const { protect, authorize } = require("../middleware/auth");

router.get("/seances/:id", protect, controller.findAllComps);
router.get("/seances/:id", protect, controller.findAllStat);
router.get("/seances/:id", protect, controller.findAllJoueur);
router.post("/creerseance", protect, authorize("coach"), controller.addSeance);
router.get("/seances", protect, controller.voirSeance);
router.get("/seancesPagine", controller.voirSeancePagine);
router.get("/seancesAujourdhui", protect, controller.voirSeanceParDate);
router.get("/seance/:id", protect, controller.getSeance);
router.put("/seance/:id", protect, authorize("coach"), controller.updateSeance);
router.put(
  "/annulerSeance/:id",
  protect,
  authorize("coach"),
  controller.annulerSeance
);
router.post(
  "/feedbackSeance/:id",
  protect,
  authorize("coach"),
  controller.faireFeedback
);

module.exports = router;
