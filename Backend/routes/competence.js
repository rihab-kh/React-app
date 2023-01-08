const express = require("express");
const routerComp = express.Router();
const controller = require("../controllers/compController");
var comps = require("../controllers/compController.js");

const { protect, authorize } = require("../middleware/auth");

routerComp.post("/comps", protect, authorize("coach"), controller.addComp);
routerComp.get("/comps", protect, authorize("coach"), controller.getComps);
routerComp.get("/comps/:id", protect, authorize("coach"), controller.getComp);
routerComp.put(
  "/comps/:id",
  protect,
  authorize("coach"),
  controller.updateComp
);
routerComp.delete(
  "/comps/:id",
  protect,
  authorize("coach"),
  controller.deleteComp
);
routerComp.get("/comps/seance/:id", protect, comps.findBySeanceId);

module.exports = routerComp;
