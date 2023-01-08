const jwt = require("jsonwebtoken");
const controller = require("../controllers/userController.js");
const User = require("../models/users");
const Joueur = require("../models/users");
verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

// exports.verifyTokenJoueur = (req, res, next) => {
//   let token = req.headers["x-access-token"];
//   if (!token) {
//     return res.status(403).send({ message: "No token provided!" });
//   }
//   jwt.verify(token, process.env.SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).send({ message: "Unauthorized!" });
//     }
//     req.userId = decoded.id;
//     next();
//   });
// };
const authJwt = {
  verifyToken,
  //isAdmin,
  //isModerator
};
module.exports = authJwt;
