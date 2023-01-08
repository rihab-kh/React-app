const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;


const lieuEntrSchema = new Schema(
  {
    nom: String,
    ville: String,
    pays: String,
    adresse: String,
    coach: {
      type: ObjectId, 
      ref: 'users'
    },
    seances: [{
      type: ObjectId, 
      ref: 'Seance'
    }],
    createdBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("lieuxEntr", lieuEntrSchema);
