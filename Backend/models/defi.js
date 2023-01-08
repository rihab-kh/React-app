const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const defiSchema = new Schema(
  {
    objectif: {
      type: String,
      require: true,
    },
    lienVideo: {
      type: String,
      require: true,
    },
    periode: {
      type: String,
    },

    done: [
      {
        type: ObjectId,
        ref: "users",
      },
    ],

    //   createdBy: {
    //     type: ObjectId,
    //     ref: "users",
    // },
    createdBy: {
      type: String,
    },

    joueurs: [{ type: ObjectId, ref: "users" }],
    //coach: { type: ObjectId, ref: "users" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("defis", defiSchema);
