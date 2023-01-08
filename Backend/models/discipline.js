const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");
const Schema = mongoose.Schema;

const disciplineSchema = new Schema(
  {
    titre: {
        type: String,
        required: false,
        maxLength: 32,
        trim: true,
    },

    coachs: 
        [{ type: Schema.Types.ObjectId, 
            ref: 'users' }]
    ,
    competences: 
        [{ type: Schema.Types.ObjectId, 
            ref: 'comps' }],


    statistiques: 
        [{ type: Schema.Types.ObjectId, 
            ref: 'stats' }],
            
    }, {timestamps: true}
);



module.exports = mongoose.model("disciplines", disciplineSchema);
