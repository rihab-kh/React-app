const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statSchema = new Schema({
  typeStat: {
    type: String,
    require: true,
  },
  unitemesure: {
    type: String,
    require: true,
  },
  minmax: {
    type: String,
    require: true,
  },
  titre: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  lien: {
    type: String,
    require: true,
  },
  visible: {
    type: Boolean,
    require: true,
  },
  seance : {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Seance'
  },
  discipline : {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'disciplines'
  }
  
});

module.exports = mongoose.model("stats", statSchema);