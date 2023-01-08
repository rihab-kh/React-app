const request = require("supertest");
const { createServer } = require("../utils/serverUtils");
const mongoose = require("mongoose");
const Seance = require("../models/seance");
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
describe("event", () => {
  jest.setTimeout(30000);
  beforeAll(async () => {
    //await connectDB();
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const data = await addUser({
      nom: "ha",
      prenom: "aya",
      email: "ayya@gmail.com",
      password: "aya123",
      DateNaiss: "11/07/1998",
      role: "coach",
    });
    await testLogin(supertest, { email: data.email, password: "aya123" });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  test("should get all session empty", async () => {
    await supertest
      .get("/api/seances")
      .expect(201)
      // .set('Authorization', Bearer ${token})
      .then((response) => {
        expect(Array.isArray(response._body)).toBeTruthy();
        expect(response._body.length).toEqual(0);
      });
  });
  test("should add a session  ", async () => {
    const seance = {
      joueur: "6232646c88ec19b2bf9818a1",
      competence: "6239dbc4164e3aa581907180",
      statistique: "629363af5da8a78f60bade63",
      jour: "2022-05-29",
      horaire: "21:40",
      lieu: "62933fec525eee5d1a441cae",
      progSeance: "6287d4aed1edaa65aaf210bf",
    };
    await supertest
      .post("/api/creerseance")
      .send(seance)

      .then(async (response) => {
        expect(response._body).toBeTruthy();
        expect(response._body.message).toBe("success");
        mess = response._body;
      });
  });
});
