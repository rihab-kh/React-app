const Stat = require("../models/statistique");

// @desc      POST stat
// @route     POST /api/stats
// @access    Private/coach
const addStat = async (req, res) => {
  const newStat = new Stat(req.body);

  try {
    await newStat.save();
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      get stat
// @route     GET /api/stats
// @access    Private
const getStats = async (req, res) => {
  try {
    const stats = await Stat.find({});
    res.status(201).send(stats);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      get stat
// @route     GET /api/stats/:id
// @access    Private
const getStat = async (req, res) => {
  try {
    const stat = await Stat.find({ _id: req.params.id });
    res.status(201).send(stat);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      put stat
// @route     PUT /api/stats/:id
// @access    Private/coach
const updateStat = async (req, res) => {
  try {
    const stat = await Stat.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!stat) {
      res.status(404).send("not found");
    }
    res.status(201).send(stat);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      delete stat
// @route     DELETE /api/stats
// @access    Private/coach
const deleteStat = async (req, res) => {
  try {
    await Stat.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addStat,
  getStats,
  getStat,
  updateStat,
  deleteStat,
};
