const LieuEntr = require("../models/lieuEntr");
const jwt_decode = require("jwt-decode"); 


// @desc      POST lieuxEntr
// @route     POST /api/lieuxEntr
// @access    Private/coach
const addLieuEntr = async (req, res) => {
  token = req.headers.authorization.split(" ")[1];

  try {
    var decoded = jwt_decode(token);
  } catch (error) {
    res.send({
      message: "Invalid token format",
    });
    return true;
  }
  const newLieuEntr = new LieuEntr({
    nom: req.body.nom,
    ville: req.body.ville,
    pays: req.body.pays,
    adresse: req.body.adresse,
    createdBy: decoded._id,
  });

  try {
    await newLieuEntr.save();
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      GET lieuxEntr
// @route     GET /api/lieuxEntr
// @access    Private/coach
const getLieuxEntr = async (req, res) => {
  token = req.headers.authorization.split(" ")[1];
  var decoded = jwt_decode(token);
  try {
    const lieuxEntr = await LieuEntr.find({ createdBy: decoded._id });
    res.status(201).send(lieuxEntr);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      GET lieuxEntr
// @route     GET /api/lieuxEntr/:id
// @access    Private/coach
const getLieuEntr = async (req, res) => {
  try {
    const lieuEntr = await LieuEntr.find({ 
    _id: req.params.id,
    createdBy: decoded._id,
   });
    res.status(201).send(lieuEntr);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      update lieuxEntr
// @route     PUT /api/lieuxEntr/:id
// @access    Private/coach
const updateLieuEntr = async (req, res) => {
  try {
    const lieuEntr = await LieuEntr.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!lieuEntr) {
      res.status(404).send("not found");
    }
    res.status(201).send(lieuEntr);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      delete lieuxEntr
// @route     DELETE /api/lieuxEntr/:id
// @access    Private/coach
const deleteLieuEntr = async (req, res) => {
  try {
    await LieuEntr.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const findAllSeances = async (req, res) => {
  const foundLieuEntr = await LieuEntr.find({ _id: req.params.id }).populate(
    "Seance"
  );
  res.json(foundLieuEntr);
};

module.exports = {
  addLieuEntr,
  getLieuxEntr,
  getLieuEntr,
  updateLieuEntr,
  deleteLieuEntr,
  findAllSeances,
};
