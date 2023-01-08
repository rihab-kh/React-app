const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const seanceSchema = new Schema(
  {
    jour: {
      type: Date,
      required: true,
    },
    horaire: {
      type: String,
      required: true,
    },
    progSeance: {
      type: ObjectId,
      ref: "programme_seances",
    },

    coach: {
      type: ObjectId,
      ref: "users",
    },

    lieu: {
      type: ObjectId,
      ref: "lieuxEntr",
    },

    disabledSeance: {
      type: Boolean,
      default: false,
    },

    raison: {
      type: String,
      default: "",
    },
    createdBy: {
      type: String,
    },

    feedback: [
      {
        textDescriptif: String,
        objectifAtteint: Boolean,
      },
    ],
    joueur: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    competence: [{ type: mongoose.Schema.Types.ObjectId, ref: "comps" }],

    statistique: [{ type: mongoose.Schema.Types.ObjectId, ref: "stats" }],
  },

  { timestamps: true }
);
module.exports = mongoose.model("Seance", seanceSchema);
