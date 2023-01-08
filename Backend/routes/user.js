const express = require("express");
const { check } = require("express-validator");
const router = express.Router({ mergeParams: true });
const { signup, signin, signout } = require("../controllers/userController");
const controller = require("../controllers/userController");
const authJwt = require("../middleware/authJwt");
const { protect, authorize } = require("../middleware/auth");
//const router1 = require("express").Router();

router.post(
  "/signup",
  [
    check("nom", "Le nom doit comporter au moins trois caractères").isLength({
      min: 3,
    }),
    check("email", "Email doit être valide").isEmail(),
    check(
      "password",
      "Le mot de passe doit comporter au moins 6 caractères"
    ).isLength({ min: 6 }),
  ],

  signup
);

router.post("/signin", signin);

router.get("/signout", signout);

router.put("/payer", protect, controller.payerAbonnement);
router.get("/NBJoueurs/:id", protect, controller.getNbJoueur);
router.get("/me", protect, controller.getMe);

// router1.post("/register", coach.register);
// router1.post("/login", coach.login);
// router1.get("/profile/:token", protect, authorize("coach"), coach.showProfile);
// router1.put(
//   "/profile/edit/:token",
//   protect,
//   authorize("coach"),
//   coach.editProfile
// );
router.put("/coach/parametrageCompte/:id",protect, controller.parametrageCompte);
router.get("/coach/:id", protect, controller.findAllEvent);
router.get("/coach/:id", protect, controller.findAllSeances);
router.get("/coach/:id", protect, controller.findAllJoueurs);

module.exports = router;
