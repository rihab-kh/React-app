const express = require("express");
const routerStat = express.Router();
const controller = require("../controllers/statController");
const { protect, authorize } = require("../middleware/auth");

routerStat.post("/stats", protect, authorize("coach"), controller.addStat);
routerStat.get("/stats", protect, controller.getStats);
routerStat.get("/stats/:id", protect, controller.getStat);
routerStat.put(
  "/stats/:id",
  protect,
  authorize("coach"),
  controller.updateStat
);
routerStat.delete(
  "/stats/:id",
  protect,
  authorize("coach"),
  controller.deleteStat
);

module.exports = routerStat;
