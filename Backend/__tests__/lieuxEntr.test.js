const request = require("supertest");
const { createServer } = require("../utils/serverUtils");
const mongoose = require("mongoose");
const LieuEntr = require("../models/lieuEntr");
const User = require("../models/users");
const { MongoMemoryServer } = require("mongodb-memory-server");
const dotenv = require("dotenv");
dotenv.config();

const app = createServer();
const supertest = request.agent(app);
async function addUser(user) {
  const newUser = await User.create(user);
  return newUser;
}

function testLogin(supertest, data) {
  return supertest
    .post("/api/signin")
    .send({ email: data.email, password: data.password })
    .expect(200)
    .then((res) => {
      supertest.set("Authorization", `Bearer ${res._body.token}`);
      return res._body.token;
    });
}
describe("LieuxEntr", () => {
  jest.setTimeout(30000);
  beforeAll(async () => {
    //await connectDB();
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const data = await addUser({
      nom: "lajjem",
      prenom: "siwar",
      email: "siwa2@gmail.com",
      password: "123456",
      DateNaiss: "25/03/1998",
      role: "coach",
    });
    await testLogin(supertest, { email: data.email, password: "123456" });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  test("should get all lieuxEntr (empty lieuxEntr) ", async () => {
    //expect(true).toBe(true);
    await supertest
      .get("/api/lieuxEntr")
      .expect(201)
      // .set("Authorization", `Bearer ${token}`)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response._body.length).toEqual(0);
      });
  });
  test("should add a lieuEntr  ", async () => {
    const lieuEntr = {
      nom: "lieu",
      ville: "tunis",
      pays: "tunis",
      adresse: "tunis",
    };
    await supertest
      .post("/api/lieuxEntr")
      .send(lieuEntr)

      .then(async (response) => {
        // console.log(response.);
        expect(response._body).toBeTruthy();
        expect(response._body.message).toBe("success");
        //const res = await LieuEntr.findOne();
        // res.expect(response._body).toBeTruthy();
        // expect(response._body.lienVideo).toBe(lieuEntr.lienVideo);
        mess = response._body;
        savedLieuEntr = response._body.model
      });
  });

  test("should return a single lieuEntr  ", async () => {
    //expect(true).toBe(true);
    await supertest
      .get("/api/lieuxEntr/" + lieuEntr._id)
      .expect(200)
      .then((response) => {
        expect(response._body._id).toBe(lieuEntr._id);
        expect(response._body.message).toBe("success");
      });
  });
  test("should update a lieuEntr", async () => {
    const lieuEntr = {
      nom: "lieu5",
      ville: "Tunis",
      pays: "tunis",
      adresse: "tunis",
    };

    await supertest
      .put("/api/lieuxEntr/" + savedLieuEntr.id.toString())
      .send(lieuEntr)
      .expect(200)
      .then(async (response) => {
        // Check the response
        expect(response._body._id).toBe(savedLieuEntr._id.toString());
        expect(response._body.nom).toBe(lieuEntr.nom);
        expect(response._body.ville).toBe(lieuEntr.ville);
        expect(response._body.pays).toBe(lieuEntr.pays);
        expect(response._body.adresse).toBe(lieuEntr.adresse);

        // Check the data in the database (optional)
        const newLieuEntr = await LieuEntr.findOne({ _id: response._body._id });
        expect(newLieuEntr).toBeTruthy();
        expect(newLieuEntr.nom).toBe(lieuEntr.nom);
        expect(newLieuEntr.ville).toBe(lieuEntr.ville);
        expect(newLieuEntr.pays).toBe(lieuEntr.pays);
        expect(newLieuEntr.adresse).toBe(lieuEntr.adresse);
      });
  });
  test("should delete a lieuEntr using its id ", async () => {
    await supertest
      .delete("/api/lieuxEntr/" + savedLieuEntr.id.toString())
      .expect(200)
      .then(async () => {
        expect(
          await LieuEntr.findOne({ _id: savedLieuEntr._id.toString() })
        ).toBeFalsy();
      });
  });
});