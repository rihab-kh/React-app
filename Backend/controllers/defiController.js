const Defi = require("../models/defi");
const joueur = require("../models/users");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

// @desc      POST createDefis
// @route     POST /api/defis
// @access    Private/coach
const addDefi = async (req, res) => {
  token = req.headers.authorization.split(" ")[1];

  try {
    var decoded = jwt_decode(token);
  } catch (error) {
    res.send({
      message: "Invalid token format",
    });
    return true;
  }
  const newDefi = new Defi({
    objectif: req.body.objectif,
    lienVideo: req.body.lienVideo,
    createdBy: decoded._id,
  });

  try {
    await newDefi.save();
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      GET Defis
// @route     GET /api/defis
// @access    Private/coach
const getDefis = async (req, res) => {
  token = req.headers.authorization.split(" ")[1];
  var decoded = jwt_decode(token);
  try {
    const defis = await Defi.find({ createdBy: decoded._id });
    res.status(201).send(defis);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      GET Defis
// @route     GET /api/defis/:id
// @access    Private/coach
const getDefi = async (req, res) => {
  try {
    const defi = await Defi.find({
      _id: req.params.id,
      createdBy: decoded._id,
    });
    res.status(201).send(defi);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      UPDATE Defis
// @route     PUT /api/defis/:id
// @access    Private/coach
const updateDefi = async (req, res) => {
  try {
    const defi = await Defi.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!defi) {
      res.status(404).send("not found");
    }
    res.status(201).send(defi);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      delete Defis
// @route     DELETE /api/defis/:id
// @access    Private/coach
const deleteDefi = async (req, res) => {
  try {
    await Defi.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      PUT Defis
// @route     PUT /api/defis/:id
// @access    Private/coach
const assignerDefi = async (req, res) => {
  try {
    const defi = await Defi.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { periode: req.body.periode, joueurs: req.body.joueurs } },
      { new: true }
    );
    if (!defi) {
      res.status(404).send("not found");
    }
    res.status(201).send(defi);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      GET Defis
// @route     GET /api/defis/joueurs/:id
// @access    Private/coach
const findAllJoueur = async (req, res) => {
  const foundDefi = await Defi.find({ _id: req.params.id }).populate("joueur");
  res.json(foundDefi);
};

module.exports = {
  addDefi,
  getDefis,
  getDefi,
  updateDefi,
  deleteDefi,
  findAllJoueur,
  assignerDefi,
};
