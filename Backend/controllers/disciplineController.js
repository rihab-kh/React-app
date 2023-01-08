const Discipline = require("../models/discipline");

const addDiscipline = async (req, res) => {
  const newDiscipline = new Discipline(req.body);

  try {
    await newDiscipline.save();
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDisciplines = async (req, res) => {
  try {
    const disciplines = await Discipline.find({});
    res.status(201).send(disciplines);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDiscipline = async (req, res) => {
  try {
    const discipline = await Discipline.find({ _id: req.params.id });
    res.status(201).send(discipline);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateDiscipline = async (req, res) => {
  try {
    const discipline = await Discipline.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!discipline) {
      res.status(404).send("not found");
    }
    res.status(201).send(discipline);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteDiscipline = async (req, res) => {
  try {
    await Discipline.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
};


const findAllCoach = async (req, res) => {
    const foundDiscipline = await Discipline.find({_id: req.params.id}).populate("users");
    res.json(foundDiscipline);
  };

  const findAllComps = async (req, res) => {
    const foundDiscipline = await Discipline.find({_id: req.params.id}).populate("competence");
    res.json(foundDiscipline);
  };

  const findAllStat = async (req, res) => {
    const foundDiscipline = await Discipline.find({_id: req.params.id}).populate("statistique");
    res.json(foundDiscipline);
  };




module.exports = {
    addDiscipline,
    getDisciplines,
    getDiscipline,
    updateDiscipline,
    deleteDiscipline,
    findAllCoach,
    findAllComps,
    findAllStat,
  };
  
  