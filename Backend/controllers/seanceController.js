const Seance = require("../models/seance");
const competence = require("../models/competence");
//const seance = require("../models/seance");
const statistique = require("../models/statistique");
const Joueur = require("../models/users");
const Coach = require("../models/users");
const date = require("date-and-time");
const jwt_decode = require("jwt-decode");

// @desc      POST createDefis
// @route     POST /api/creerseance
// @access    Private/coach
const addSeance = async (req, res) => {
  token = req.headers.authorization.split(" ")[1];
  try {
    var decoded = jwt_decode(token);
  } catch (error) {
    res.send({
      message: "Invalid token format",
    });
    return true;
  }
  const newSeance = new Seance({
    joueur: req.body.joueur,
    competence: req.body.competence,
    statistique: req.body.statistique,
    jour: req.body.jour,
    horaire: req.body.horaire,
    lieu: req.body.lieu,
    progSeance: req.body.progSeance,
    createdBy: decoded._id,
  });
  try {
    await newSeance
      /*.find()
    .populate('competence','_id nom desccomp')
    .select("_id nom desccomp created")*/
      .save();
    res.status(201).json({ message: "success" });

    // var transport = nodemailer.createTransport({
    //   service: "gmail",
    //   //host: "projettest831@gmail.com",
    //   port: 465,
    //   secure: false,
    //   auth: {
    //     user: "projettest831@gmail.com",
    //     pass: "siwar1998",
    //   },
    //   tls: {
    //     rejectUnauthorized: false,
    //   },
    // });
    // const coach = Coach.findById(req.body._id);
    // var mailOptions = {
    //   from: "projettest831@gmail.com", // Sender address
    //   to: [coach.email, req.body.joueur], // List of recipients
    //   subject: "Invitation", // Subject line
    //   text: "Bonjour joueur, vous étes inviter à cette séance"`${req.body.jour}``${req.body.horaire}``${req.body.lieu}``${req.body.programme}`, // Plain text body
    // };

    // transport.sendMail(mailOptions, function (err, info) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("Email sent: " + info.response);
    //   }
    // });
  } catch (error) {
    res.status(500).json(error);
  }
};

// voir toutes les seances

// @desc      GET seance
// @route     GET /api/seances
// @access    Private
const voirSeance = async (req, res) => {
  token = req.headers.authorization.split(" ")[1];
  var decoded = jwt_decode(token);
  try {
    const seances = await Seance.find({})
      .populate({
        path: "competence",
        select: "nom",
      })
      .populate({
        path: "statistique",
        select: "titre",
      })
      .populate({
        path: "joueur",
        select: "nom",
      })
      .populate({
        path: "lieu",
        select: "nom",
      })
      .populate({
        path: "progSeance",
        select: "title",
      });
    res.status(201).send(seances);
  } catch (error) {
    res.status(500).json(error);
  }
};

// @desc      GET seance
// @route     GET /api/seances/:id
// @access    Private
const getSeance = async (req, res) => {
  try {
    const seance = await Seance.find({ _id: req.params.id });
    res.status(201).send(seance);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      update seance
// @route     PUT /api/seance/:id
// @access    Private/coach
const updateSeance = async (req, res) => {
  try {
    const seance = await Seance.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!seance) {
      res.status(404).send("not found");
    }
    res.status(201).send(seance);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      update seance
// @route     PUT /api/annulerSeance/:id
// @access    Private/coach
const annulerSeance = async (req, res) => {
  try {
    const seances = await Seance.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { raison: req.body.raison, disabledSeance: true } },
      { new: true }
    );
    if (!seances) {
      res.status(404).send("not found");
    }
    res.status(201).send(seances);
  } catch (error) {
    res.status(500).send(error);
  }
};

/*const voirSeanceParDate = (req, res, next) => {
    try {
      const d = new Date();
       Seance.find({jour: d.getDay()}, (err, docs)=>{
      if (err){
        responseObj ={
          body: {},
        };
        res.status(201).send(responseObj);
      } else {
        responseObj ={
          body: docs,
        };
        res.status(201).send(responseObj);
      }}
      )
    } catch (error) {
      console.log('error:', error)
    }
  };*/

// @desc      get seance
// @route     GET /api/seancesAujourdhui
// @access    Private
const voirSeanceParDate = (req, res) => {
  try {
    const d = new Date();
    const seances = Seance.find({ jour: d.toLocaleString() });
    res.status(201).send(seances);
  } catch (error) {
    res.status(500).json(error);
  }
};

const voirSeancePagine = async (req, res) => {
  try {
    const limitValue = req.query.limit || 3;
    const skipValue = req.query.skip || 0;
    const seances = await Seance.find().limit(limitValue).skip(skipValue);
    res.status(201).send(seances);
  } catch (error) {
    res.status(500).json(error);
  }
};

// @desc      post seance
// @route     POST /api/feedbackSeance/:id
// @access    Private/coach
const faireFeedback = async (req, res) => {
  if (!Seance.disabledSeance) {
    try {
      const seances = await Seance.findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: {
            feedback: {
              textDescriptif: req.body.textDescriptif,
              objectifAtteint: req.body.objectifAtteint,
              timestamp: new Date().getTime(),
            },
          },
        },
        { new: true }
      );
      if (!seances) {
        res.status(404).send("not found");
      }
      res.status(201).send(seances);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

// @desc      get seance
// @route     GET /api/seances/:id
// @access    Private/coach
const findAllJoueur = async (req, res) => {
  const foundSeance = await Seance.find({ _id: req.params.id }).populate(
    "joueur"
  );
  res.json(foundSeance);
};

// @desc      get seance
// @route     GET /api/seances/:id
// @access    Private/coach
const findAllComps = async (req, res) => {
  const foundSeance = await Seance.find({ _id: req.params.id }).populate(
    "competence"
  );
  res.json(foundSeance);
};

// @desc      get seance
// @route     GET /api/seances/:id
// @access    Private/coach
const findAllStat = async (req, res) => {
  const foundSeance = await Seance.find({ _id: req.params.id }).populate(
    "statistique"
  );
  res.json(foundSeance);
};

module.exports = {
  addSeance,
  voirSeance,
  updateSeance,
  findAllComps,
  findAllStat,
  findAllJoueur,
  annulerSeance,
  getSeance,
  faireFeedback,
  voirSeanceParDate,
  voirSeancePagine,
};
