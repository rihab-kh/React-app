const User = require("../models/users");
const Discipline = require("../models/discipline");
const { validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");

const jwt_decode = require("jwt-decode");

const asyncHandler = require("../middleware/async");

// @desc      Register user
// @route     POST /api/signup
// @access    Public
exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array()[0].msg,
    });
  }
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    nom: req.body.nom,
    prenom: req.body.prenom,
    DateNaiss: req.body.DateNaiss,
    //joueurs: req.body.joueurs,
    role: "coach",
  });
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to add coach",
      });
    }

    return res.json({
      message: "Success",

      user,
    });
  });
};

// @desc      Login user
// @route     POST /api/signin
// @access    Public
exports.signin =  (req, res) => {
  const { email, password } = req.body;

   User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Email introuvable",
      });
    }

    //Authenticate user
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email et mot de passe ne correspondent pas",
      });
    }

    // Create token
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.SECRET
    );

    // Put token in cookie
    res.cookie("token", token, { expire: new Date() + 1 });

    //Send response
    const { _id, nom, email, role } = user;
    return res.json({
      token,
      user: {
        _id,
        nom,
        email,
        role,
      },
    });
  });
};

// @desc      update compte
// @route     PUT /api/compte/:id
// @access    Private/coach
exports.parametrageCompte = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!user) {
      return res.status(404).send("not found");
    }
    return res.status(200).send(user);
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
};

/*exports.getNbJoueur = async (req, res) => {
  try {
    const c = await user.findById(req.params.id);
    const nbj = await joueurs.findById(c.joueurs);

    console.log(nbj);
    res.status(201).send(nbj);
  } catch (error) {
    res.status(500).send(error);
  }
};*/

exports.getNbJoueur = async (req, res) => {
  const foundUser = await joueurs
    .find({ _id: req.params.id })
    .populate("joueurs")
    .countDocuments();
  res.json(foundUser);
};

exports.findAllLieuEntr = async (req, res) => {
  const foundUser = await User.find({ _id: req.params.id }).populate(
    "lieuxEntr"
  );
  res.json(foundUser);
};

// @desc      get event
// @route     GET /api/coach/:id
// @access    Private
exports.findAllEvent = async (req, res) => {
  const foundUser = await User.find({ _id: req.params.id }).populate("Event");
  res.json(foundUser);
};

// @desc      get event
// @route     GET /api/coach/:id
// @access    Private
exports.findAllSeances = async (req, res) => {
  const foundUser = await User.find({ _id: req.params.id }).populate("Seance");
  res.json(foundUser);
};

// @desc      get event
// @route     GET /api/coach/:id
// @access    Private
exports.findAllDefis = async (req, res) => {
  const foundUser = await User.find({ _id: req.params.id }).populate("defis");
  res.json(foundUser);
};

// @desc      get event
// @route     GET /api/coach/:id
// @access    Private
exports.findAllJoueurs = async (req, res) => {
  const foundUser = await User.find({ _id: req.params.id }).populate("joueurs");
  res.json(foundUser);
};

// @desc      Log user out / clear cookie
// @route     GET /api/signout
// @access    Private
exports.signout = (req, res) => {
  res.clearCookie("token");
  return res.json({
    message: "Déconnexion réussie",
  });
};

// @desc      Get current logged in user
// @route     GET /api/me
// @access    Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);
console.log(req.user);
  res.status(200).json({
    success: true,
    model: user,
  });
});

// @desc      UPDATE abonnement
// @route     PUT /api/payer
// @access    Private/coach
module.exports.payerAbonnement = async (req, res) => {
  token = req.headers.authorization.split(" ")[1];

  var decoded = jwt_decode(token);

  const user = User.findById(decoded._id);

  var nb = 0;

  if (req.body.typeAbonnement == "free") {
    nb = 3;
  } else if (req.body.typeAbonnement == "basic") {
    nb = 10;
  } else {
    nb = -1;
  }
  const payer = {
    abonnement: { typeAbonnement: req.body.typeAbonnement, nbJoueur: nb },
  };

  User.findByIdAndUpdate(
    decoded._id,
    { $set: payer },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("there is somthing wrong");
    }
  );
};
