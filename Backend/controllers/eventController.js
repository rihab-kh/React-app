const req = require("express/lib/request");
const Event = require("../models/event");
const moment = require("moment");
const jwt_decode = require("jwt-decode");

// @desc      POST event
// @route     POST /api/event
// @access    Private/coach
const addEvent = async (req, res) => {
  token = req.headers.authorization.split(" ")[1];

  try {
    var decoded = jwt_decode(token);
  } catch (error) {
    res.send({
      message: "Invalid token format",
    });
    return true;
  }
  const dd = req.body.date_debut;
  const df = req.body.date_fin;
  const DateD = moment(dd, "YYYY-MM-DD");
  const Datef = moment(df, "YYYY-MM-DD");
  const newEvent = new Event({
    nom: req.body.nom,
    description: req.body.description,
    date_debut: DateD,
    date_fin: Datef,
    // capacite_audience: req.body.capacite_audience,
    etat: req.body.etat,
    lieu: req.body.lieu,
    event_image: req.body.event_image,
    createdBy: decoded._id,
  });
  try {
    await newEvent.save();
    res.status(201).json({ message: "success" });
    // res.json({
    //   success: 1,
    //   image_url: `http://localhost:8800/eventimage/${req.file.filename}`,
    // });
  } catch (error) {
    res.status(500).json(error);
  }
};

// @desc      GET event
// @route     GET /api/event
// @access    Private
const getEvents = async (req, res) => {
  token = req.headers.authorization.split(" ")[1];
  var decoded = jwt_decode(token);
  try {
    const events = await Event.find({ createdBy: decoded._id });
    res.status(201).send(events);
  } catch (error) {
    res.status(500).json(error);
  }
};

// @desc      GET event
// @route     GET /api/event/:id
// @access    Private
const getEvent = async (req, res) => {
  try {
    const event = await Event.find({
      _id: req.params.id,
      createdBy: decoded._id,
    });
    res.status(201).send(event);
  } catch (error) {
    res.status(500).json(error);
  }
};

// @desc      update event
// @route     PUT /api/event/:id
// @access    Private/coach
const updateEvent = async (req, res) => {
  try {
    const event = await Event.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
      //   { createdBy: decoded._id }
    );
    if (!event) {
      res.status(404).send("not found");
    }
    res.status(201).send(event);
  } catch (error) {
    res.status(500).json(error);
  }
};

// @desc      delete event
// @route     DELETE /api/event/:id
// @access    Private/coach
const deleteEvent = async (req, res) => {
  try {
    await Event.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc      GET event
// @route     GET /api/event/joueurs/:id
// @access    Private/coach
const findAllJoueur = async (req, res) => {
  const foundEvent = await Event.find({ _id: req.params.id }).populate(
    "joueur"
  );
  res.json(foundEvent);
};

module.exports = {
  addEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent,
  findAllJoueur,
};
