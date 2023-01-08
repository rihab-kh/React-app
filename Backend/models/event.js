const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const eventSchema = new Schema(
  {
    nom: {
      type: String,
      //  required: true,
    },
    description: {
      type: String,
    },
    date_debut: {
      type: Date,
      //   required: true,
    },
    date_fin: {
      type: Date,
      // required: true,
    },
    // capacite_audience: {
    //   type: Number,
    //   required: true,
    // },
    etat: {
      type: Boolean,
      // required: true,
    },
    lieu: {
      type: String,
      //   required: true,
    },
    event_image: {
      type: String,
      // required: true,
    },
    createdBy: {
      type: String,
    },

    joueurs: [{ type: Schema.Types.ObjectId, ref: "users" }],

    coach: { type: Schema.Types.ObjectId, ref: "users" },

    participants: [
      {
        type: ObjectId,
        ref: "joueurs",
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Event", eventSchema);
