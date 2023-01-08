const Comp = require("../models/competence");
const seance = require("../models/seance");

// @desc      POST addComp
// @route     POST /api/comps
// @access    Private/coach
const addComp = async (req, res) => {
  const newComp = new Comp(req.body);

  try {
    await newComp.save();
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      GET getComps
// @route     GET /api/comps
// @access    Private/coach
const getComps = async (req, res) => {
  try {
    const comps = await Comp.find({});
    res.status(201).send(comps);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      GET getComps
// @route     GET /api/comps/:id
// @access    Private/coach
const getComp = async (req, res) => {
  try {
    const comp = await Comp.find({ _id: req.params.id });
    res.status(201).send(comp);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      PUT updateComp
// @route     PUT /api/comps/:id
// @access    Private/coach
const updateComp = async (req, res) => {
  try {
    const comp = await Comp.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!comp) {
      res.status(404).send("not found");
    }
    res.status(201).send(comp);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc       DELETE Comp
// @route     DELETE /api/comps/:id
// @access    Private/coach
const deleteComp = async (req, res) => {
  try {
    await Comp.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      GET findBySeanceId
// @route     GET /api/comps/seance/:id
// @access    Private
const findBySeanceId = async (req, res) => {
  Comp.find({ seance: req.params._id }).exec(function (err, comps) {
    if (err) {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Products not found with given Company Id " + req.params._id,
        });
      }
      return res.status(500).send({
        message:
          "Error retrieving Products with given Company Id " + req.params._id,
      });
    }

    res.send(comps);
  });
};

module.exports = {
  addComp,
  getComps,
  getComp,
  updateComp,
  deleteComp,
  findBySeanceId,
};
