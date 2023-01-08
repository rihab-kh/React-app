const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routerLieu = require("./routes/lieuEntr");
const routerUser = require("./routes/user");
const routerJoueur = require("./routes/joueur");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
//const joueur = require("./models/joueur");
const progSeance = require("./routes/programmeSeance");
const routerStat = require("./routes/statistique");
const routerComp = require("./routes/competence");
const seanceRoutes = require("./routes/seance");
const defiRoutes = require("./routes/defi");
const eventRoutes = require("./routes/event");

dotenv.config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(cors());

app.use("/api", routerLieu);
app.use("/api", routerUser);
app.use("/api", routerJoueur);
app.use("/api", progSeance);
app.use("/api", routerStat);
app.use("/api", routerComp);
app.use("/api", seanceRoutes);
app.use("/api", defiRoutes);
app.use("/api", eventRoutes);

app.use("/uploads", express.static("public/images"));

//app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

/* run server */
app.listen(process.env.PORT, () => {
  console.log("back end is working");
});

/*joueur.find().count(function(err, count){
  console.log("Number of docs: ", count );
});*/
