const Joueur = require("../models/users");
const nodemailer = require("nodemailer");
const req = require("express/lib/request");
const Coach = require("../models/users");
const userController = require("../controllers/userController");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

//const { route } = require("express/lib/application");

// @desc      POST createJoueur
// @route     POST /api/joueurs
// @access    Private/coach
const addJoueur = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  token = req.headers.authorization.split(" ")[1];

  try {
    var decoded = jwt_decode(token);
  } catch (error) {
    res.send({
      message: "Invalid token format",
    });
    return true;
  }

  const newJoueur = new Joueur({
    //photo: req.file.path,
    nom: req.body.nom,
    prenom: req.body.prenom,
    DateNaiss: req.body.DateNaiss,
    email: req.body.email,
    sexe: req.body.sexe,
    LieuNaiss: req.body.LieuNaiss,
    education: req.body.education,
    typeEtablissement: req.body.typeEtablissement,
    ville: req.body.ville,
    telephone: req.body.telephone,
    prixSeance: req.body.prixSeance,
    poids: req.body.poids,
    taille: req.body.taille,
    IMC: req.body.IMC,
    role: "joueur",
    preferenceManuelle: req.body.preferenceManuelle,
    password: hashedPassword,
    createdBy: decoded.id,
    //coach: req.body.coach,
  });

  try {
    /*if ((coach.abonnement.Equals('free') && userController.getNbJoueur() < 3) ||
    (coach.abonnement.Equals('basic') && userController.getNbJoueur() < 10) || 
    (coach.abonnement.Equals('premium') )) {*/
    await newJoueur.save();
    //res.status(201).json({ message: "success" });

    res.json({
      success: 1,
      image_url: `http://localhost:8800/photo/${req.file.filename}`,
    });

    var transport = nodemailer.createTransport({
      service: "gmail",
      //host: "projettest831@gmail.com",
      port: 465,
      secure: false,
      auth: {
        user: "projettest831@gmail.com",
        pass: "siwar1998",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    var mailOptions = {
      from: "projettest831@gmail.com", // Sender address
      to: req.body.email, // List of recipients
      subject: "Invitation", // Subject line
      //text: "Bonjour joueur, bienvenue cliquer sur ce lien pour compléter votre inscription!", // Plain text body
      html: `Bonjour joueur, bienvenue cliquer sur ce lien pour compléter votre inscription! 
            <a href="http://localhost:3000/inscription">continuer votre inscription</a>`,
    };

    transport.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    /*else {
    console.log('one ne peut pas ajouter joueur')
  }*/
  } catch (error) {
    res.status(500).json(error);
  }
};

// @desc      POST inviterJoueur
// @route     POST /api/joueurs
// @access    Private/coach
const inviterJoueur = async (req, res) => {
  token = req.headers.authorization.split(" ")[1];

  try {
    var decoded = jwt_decode(token);
  } catch (error) {
    res.send({
      message: "Invalid token format",
    });
    return true;
  }

  const {
    nom,
    prenom,
    DateNaiss,
    email,
    sexe,
    LieuNaiss,
    education,
    typeEtablissement,
    ville,
    telephone,
    prixSeance,
    poids,
    taille,
    IMC,
    preferenceManuelle,
  } = req.body;

  // Create token
  const formToken = jwt.sign(
    {
      coach_id: decoded.id,
      nom,
      prenom,
      DateNaiss,
      email,
      sexe,
      LieuNaiss,
      education,
      typeEtablissement,
      ville,
      telephone,
      prixSeance,
      poids,
      taille,
      IMC,
      preferenceManuelle,
    },
    process.env.SECRET
  );

  // const newJoueur = new Joueur({
  //   //photo: req.file.path,
  //   nom: req.body.nom,
  //   prenom: req.body.prenom,
  //   DateNaiss: req.body.DateNaiss,
  //   email: req.body.email,
  //   sexe: req.body.sexe,
  //   LieuNaiss: req.body.LieuNaiss,
  //   education: req.body.education,
  //   typeEtablissement: req.body.typeEtablissement,
  //   ville: req.body.ville,
  //   telephone: req.body.telephone,
  //   prixSeance: req.body.prixSeance,
  //   poids: req.body.poids,
  //   taille: req.body.taille,
  //   IMC: req.body.IMC,
  //   role: "joueur",
  //   preferenceManuelle: req.body.preferenceManuelle,
  //   password: hashedPassword,
  //   createdBy: decoded.id,
  //   //coach: req.body.coach,
  // });

  try {
    var transport = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: false,
      auth: {
        user: "projettest831@gmail.com",
        pass: "siwar1998",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    var mailOptions = {
      from: "projettest831@gmail.com", // Sender address
      to: email, // List of recipients
      subject: "Invitation", // Subject line
      //text: "Bonjour joueur, bienvenue cliquer sur ce lien pour compléter votre inscription!", // Plain text body
      html: `Bonjour joueur, bienvenue cliquer sur ce lien pour compléter votre inscription! 
            <a href="http://localhost:3000/inscription/${formToken}">continuer votre inscription</a>`,
    };

    transport.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// @desc      GET Joueur
// @route     GET /api/joueurs
// @access    Private/coach
const getJoueurs = async (req, res) => {
  token = req.headers.authorization.split(" ")[1];
  var decoded = jwt_decode(token);
  try {
    const joueurs = await Joueur.find({});
    res.status(201).send(joueurs);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      GET Joueur
// @route     GET /api/joueurs/:id
// @access    Private/coach
const getJoueur = async (req, res) => {
  try {
    const joueur = await Joueur.find({
      _id: req.params.id,
      createdBy: decoded._id,
    })
      .populate({
        path: "competence",
        select: "nom",
      })
      .populate({
        path: "statistique",
        select: "titre",
      })
      .populate({
        path: "defis",
        select: "objectif",
      });
    res.status(201).send(joueur);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      update Joueur
// @route     PUT /api/joueurs/:id
// @access    Private
const updateJoueur = async (req, res) => {
  try {
    const joueur = await Joueur.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!joueur) {
      res.status(404).send("not found");
    }
    res.status(201).send(joueur);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      delete Joueur
// @route     DELETE /api/joueurs/:id
// @access    Private/coach
const deleteJoueur = async (req, res) => {
  try {
    await Joueur.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const findAllEvent = async (req, res) => {
  const foundJoueur = await Joueur.find({ _id: req.params.id }).populate(
    "Event"
  );
  res.json(foundJoueur);
};

const AjoutJoueurAuCoach = async (req, res) => {
  try {
    const coach = await coach.findOneAndUpdate(
      { _id: req.body.coach },
      {
        $set: {
          joueurs: req.body.id,
        },
      },
      { new: true }
    );

    const joueur = await Joueur.findById(coach.joueurs);

    res.status(201).send(coach);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      post Joueur
// @route     POST /api/register
// @access    Private/joueur
const registerJoueur = async (req, res) => {
  try {
    // const salt = await bcrypt.genSalt(10);
    //const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const joueur = await Joueur.findOneAndUpdate(
      { _id: req.body.id },
      {
        $set: {
          password: req.body.password,
        },
      }
    );
    if (!joueur) {
      res.status(404).send("not found");
    }
    res.status(201).send(joueur);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      post Joueur
// @route     POST /api/login
// @access    Private/joueur
const login = async (req, res) => {
  try {
    const user = await Joueur.findOne({ email: req.body.email });
    !user && res.status(400).json("wrong credentials");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("wrong credentials");

    // Create token
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.SECRET
    );

    // Put token in cookie
    res.cookie("token", token, { expire: new Date() + 1 });

    const { _id, nom, email, role } = user;

    res.status(200).json({
      user: {
        _id,
        nom,
        email,
        role,
      },
      token,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// @desc      post Joueur
// @route     POST /api/logout
// @access    Private/joueur
const logout = async (req, res) => {
  const authHeader = req.headers["authorization"];
  jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    if (logout) {
      res.send({ msg: "You have been Logged Out" });
    } else {
      res.send({ msg: "Error" });
    }
  });
};

/*const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadImg = multer({ storage: storage }).single("image");*/

module.exports = {
  addJoueur,
  //uploadImg,
  getJoueurs,
  getJoueur,
  updateJoueur,
  deleteJoueur,
  //invitJoueur,
  inviterJoueur,
  findAllEvent,
  registerJoueur,
  AjoutJoueurAuCoach,
  login,
  logout,
};
