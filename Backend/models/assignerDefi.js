const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;


const assignerDefiSchema = new Schema(
  {
    periode: {
      type: String,
      require: true,
    },
    joueurs: 
        [{ type: ObjectId, 
            ref: 'joueurs' }]
    ,

    coach: 
        { type: ObjectId, 
            ref: 'users' }
    ,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("assignerDefi", assignerDefiSchema);
