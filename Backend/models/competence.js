const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const compSchema = new Schema({
  nom: {
    type: String,
    require: true,
  },
  desccomp: {
    type: String,
    require: true,
  },
  visibility: {
    type: Boolean,
    require: true,
  },
  liencomp: {
    type: String,
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

module.exports = mongoose.model("comps", compSchema);