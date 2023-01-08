const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const programme_seanceSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    descriptionTechnique: {
      type: String,
      require: true,
      // unique: true,
    },
    image: {
      type: String,
      require: true,
      // unique: true,
    },
    lienVideo: {
      type: String,
      require: true,
      // unique: true,
    },
    createdBy: {
      type: String,
      require: false,
    },

    seance: [{ type: ObjectId, ref: "Seance" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("programme_seances", programme_seanceSchema);
