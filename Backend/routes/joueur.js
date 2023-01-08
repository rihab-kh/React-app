const express = require("express");
const router = express.Router();
const controller = require("../controllers/joueurController");
const multer = require("../uploads/multer-config");
const authJwt = require("../middleware/authJwt");

const { protect, authorize } = require("../middleware/auth");

router.post(
  "/joueurs",
  protect,
  authorize("coach"),

  multer,
  controller.addJoueur
  //controller.AjoutJoueurAuCoach
);

router.post(
  "/joueurs/inviter",
  protect,
  authorize("coach"),

  multer,
  controller.inviterJoueur
  //controller.AjoutJoueurAuCoach
);

//router.post("/invitjoueur", controller.invitJoueur);
router.get("/joueurs", protect, authorize("coach"), controller.getJoueurs);
router.get("/joueurs/:id", protect, authorize("coach"), controller.getJoueur);
router.put("/joueurs/:id", protect, controller.updateJoueur);
router.delete(
  "/joueurs/:id",
  protect,
  authorize("coach"),
  controller.deleteJoueur
);

router.post(
  "/register",
  protect,
  authorize("joueur"),
  controller.registerJoueur
);
router.post("/login", protect, authorize("joueur"), controller.login, [
  authJwt.verifyToken,
]);
router.post("/logout", protect, authorize("joueur"), controller.logout, [
  authJwt.verifyToken,
]);
/*router1.post("/register/:token", joueur.register);
router1.post("/login", joueur.login);
router1.get("/profile/:token", joueur.showProfile);
router1.put("/profile/edit/:token", joueur.editProfile);
*/
module.exports = router;
