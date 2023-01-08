const express = require("express");
const router = express.Router();
const controller = require("../controllers/lieuEntrController");
const { protect, authorize } = require("../middleware/auth");

router.post("/lieuxEntr", protect, authorize("coach"), controller.addLieuEntr);
router.get("/lieuxEntr", protect, controller.getLieuxEntr);
router.get("/lieuxEntr/:id", protect, controller.getLieuEntr);
router.put(
  "/lieuxEntr/:id",
  protect,
  authorize("coach"),
  controller.updateLieuEntr
);
router.delete(
  "/lieuxEntr/:id",
  protect,
  authorize("coach"),
  controller.deleteLieuEntr
);

module.exports = router;
