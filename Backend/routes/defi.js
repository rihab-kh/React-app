const express = require("express");
const router = express.Router();
const controller = require("../controllers/defiController");

const { protect, authorize } = require("../middleware/auth");

router.post("/defis", protect, authorize("coach"), controller.addDefi);
router.get("/defis", protect, controller.getDefis);
router.get("/defis/:id", protect, controller.getDefi);
router.put("/defis/:id", protect, authorize("coach"), controller.updateDefi);
router.put(
  "/assignerDefis/:id",
  protect,
  authorize("coach"),
  controller.assignerDefi
);
router.delete("/defis/:id", protect, authorize("coach"), controller.deleteDefi);
router.get(
  "/defis/joueurs/:id",
  protect,
  authorize("coach"),
  controller.getDefi
);

module.exports = router;
