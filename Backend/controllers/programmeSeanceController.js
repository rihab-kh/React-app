const joueur = require("../models/users");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

const Programme_seance = require("../models/programmeSeance");

// @desc      POST programme_seances
// @route     POST /api/programme_seances
// @access    Private/coach
const addProgramme_seance = async (req, res) => {
  token = req.headers.authorization.split(" ")[1];

  try {
    var decoded = jwt_decode(token);
  } catch (error) {
    res.send({
      message: "Invalid token format",
    });
    return true;
  }

  const newProgramme_seance = new Programme_seance({
    title: req.body.title,
    descriptionTechnique: req.body.descriptionTechnique,
    //image: req.file.path,
    image: req.body.image,
    lienVideo: req.body.lienVideo,
    createdBy: decoded._id,
  });

  try {
    await newProgramme_seance.save();
    //console.log(decoded);
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      GET programme_seances
// @route     GET /api/programme_seances
// @access    Private
const getProgramme_seances = async (req, res) => {
  token = req.headers.authorization.split(" ")[1];
  var decoded = jwt_decode(token);
  try {
    const programme_seances = await Programme_seance.find({
      createdBy: decoded._id,
    });
    res.status(201).send(programme_seances);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      GET programme_seances
// @route     GET /api/programme_seances/:id
// @access    Private
const getProgramme_seance = async (req, res) => {
  try {
    const programme_seance = await Programme_seance.find({
      _id: req.params.id,
      createdBy: decoded._id,
    });
    res.status(201).send(programme_seance);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      update programme_seances
// @route     PUT /api/programme_seances/:id
// @access    Private/coach
const updateProgramme_seance = async (req, res) => {
  try {
    const programme_seance = await Programme_seance.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!programme_seance) {
      res.status(404).send("not found");
    }
    res.status(201).send(programme_seance);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      delete programme_seances
// @route     DELETE /api/programme_seances/:id
// @access    Private/coach
const deleteProgramme_seance = async (req, res) => {
  try {
    await Programme_seance.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const findAllSeances = async (req, res) => {
  const foundProgramme_seance = await Programme_seance.find({
    _id: req.params.id,
  }).populate("Seance");
  res.json(foundProgramme_seance);
};

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadImg = multer({ storage: storage }).single("image");

module.exports = {
  addProgramme_seance,
  uploadImg,
  getProgramme_seances,
  getProgramme_seance,
  updateProgramme_seance,
  deleteProgramme_seance,
  findAllSeances,
};
