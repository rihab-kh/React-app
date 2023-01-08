const request = require("supertest");
const { createServer } = require("../utils/serverUtils");
const mongoose = require("mongoose");
const Stat = require("../models/statistique");
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
describe("Stats", () => {
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
  test("should get all stats (empty stats) ", async () => {
    //expect(true).toBe(true);
    await supertest
      .get("/api/stats")
      .expect(201)
      // .set("Authorization", `Bearer ${token}`)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response._body.length).toEqual(0);
      });
  });
  test("should add a stat  ", async () => {
    const stat = {
        typeStat: "Statinteg",
        unitemesure: "minutes",
        minmax:"max",
        titre:"Stat",
        description:"pour test",
        lien:"www.statinteg.com",
        visible:"true",

    };
    await supertest
      .post("/api/stats")
      .send(stat)

      .then(async (response) => {
        // console.log(response.);
        expect(response._body).toBeTruthy();
        expect(response._body.message).toBe("success");
        //const res = await Stat.findOne();
        // res.expect(response._body).toBeTruthy();
        // expect(response._body.lienVideo).toBe(stat.lienVideo);
        mess = response._body;
      });
  });

  test("should return a single stat  ", async () => {
    //expect(true).toBe(true);
    await supertest
      .get("/api/stats/" + stat._id)
      .expect(200)
      .then((response) => {
        expect(response._body._id).toBe(stat._id);
        expect(response._body.message).toBe("success");
      });
  });
  test("should update a stat", async () => {
    const stat = {
        typeStat: "Statinteg",
        unitemesure: "minutes",
        minmax:"max",
        titre:"Stat",
        description:"pour test",
        lien:"www.statinteg.com",
        visible:"true",

    };

    await supertest
      .put("/api/stats/" + savedStat._id.toString())
      .send(stat)
      .expect(200)
      .then(async (response) => {
        // Check the response
        expect(response._body._id).toBe(savedStat._id.toString());
        expect(response._body).toBeTruthy();
        expect(response._body.message).toBe("success");

        // Check the data in the database (optional)
        const newStat = await Stat.findOne({ _id: response._body._id });
        expect(newStat).toBeTruthy();
        expect(response._body).toBeTruthy();
        expect(response._body.message).toBe("success");
      });
  });
  test("should delete a stat using its id ", async () => {
    await supertest
      .delete("/api/stats/" + savedStat._id.toString())
      .expect(200)
      .then(async () => {
        expect(
          await Stat.findOne({ _id: savedStat._id.toString() })
        ).toBeFalsy();
      });
  });
});