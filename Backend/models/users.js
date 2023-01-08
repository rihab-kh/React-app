const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const userSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
      maxLength: 32,
      trim: true,
    },
    prenom: {
      type: String,
      required: true,
      maxLength: 32,
      trim: true,
    },
    DateNaiss: {
      type: String,
      required: true,
      maxLength: 32,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    type_alerte: {
      type: String,
      trim: true,
      enum: [
        "nombre de séances non atteint par joueur par semaine",
        "une valeur de statistique qui diminue ou qui augmente",
        "Quels sont les joueurs proches de leurs objectifs et ceux qui sont loins",
      ],
    },
    abonnement: {
      typeAbonnement: {
        type: String,
        trim: true,
        enum: ["free", "basic", "premuim"],
      },
      nbJoueur: {
        type: Number,
      },
    },

    sexe: {
      type: String,
      trim: true,
      enum: ["féminin", "masculin"],
    },
    LieuNaiss: {
      type: String,
      required: false,
      maxLength: 32,
      trim: true,
    },

    education: {
      type: String,
      trim: true,
      enum: ["eleve", "étudiant"],
    },

    typeEtablissement: {
      type: String,
      trim: true,
      enum: ["étatique", "privée", "mission"],
    },

    ville: {
      type: String,
      required: false,
      maxLength: 32,
      trim: true,
    },

    telephone: {
      type: Number,
      required: false,
    },

    prixSeance: {
      type: Number,
      required: false,
    },

    poids: {
      type: Number,
      required: false,
    },

    taille: {
      type: Number,
      required: false,
    },

    IMC: {
      required: false,
      type: Number,
      value: function () {
        return this.poids / (this.taille * this.taille);
      },
    },
    preferenceManuelle: {
      type: String,
      trim: true,
      enum: ["droitier", "gaucher"],
    },

    Lieux: [{ type: ObjectId, ref: "lieuxEntr" }],
    events: [{ type: ObjectId, ref: "Event" }],
    //joueurs: [{ type: ObjectId, ref: "joueurs" }],
    seance: [{ type: Schema.Types.ObjectId, ref: "Seance" }],
    events: [{ type: Schema.Types.ObjectId, ref: "Event" }],

    defis: [
      {
        type: Schema.Types.ObjectId,
        ref: "defis",
      },
    ],
    discipline: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "disciplines",
    },

    firstLogin: {
      type: Boolean,
      Default: true,
    },

    role: {
      type: String,
      enum: ["coach", "joueur"],
      default: "coach",
    },
    createdBy: {
      type: String,
    },

    encry_password: {
      type: String,
      required: true,
    },
    salt: String,
  },

  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function (plainpassword) {
    if (!plainpassword) return "";

    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("users", userSchema);
