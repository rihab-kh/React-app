const request = require("supertest");
const { createServer } = require("../utils/serverUtils");
const mongoose = require("mongoose");
const Defi = require("../models/defi");
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
describe("Defis", () => {
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
  test("should get all defis (empty defis) ", async () => {
    //expect(true).toBe(true);
    await supertest
      .get("/api/defis")
      .expect(201)
      // .set("Authorization", `Bearer ${token}`)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response._body.length).toEqual(0);
      });
  });
  test("should add a defi  ", async () => {
    const defi = {
      objectif: "50 metre",
      lienVideo: "https://www.youtube.com/watch?v=Xgy1BBUmq4Y",
    };
    await supertest
      .post("/api/defis")
      .send(defi)

      .then(async (response) => {
        // console.log(response.);
        expect(response._body).toBeTruthy();
        expect(response._body.message).toBe("success");
        //const res = await Defi.findOne();
        // res.expect(response._body).toBeTruthy();
        // expect(response._body.lienVideo).toBe(defi.lienVideo);
        mess = response._body;
      });
  });

  test("should return a single defi  ", async () => {
    //expect(true).toBe(true);
    await supertest
      .get("/api/defis/" + defi._id)
      .expect(200)
      .then((response) => {
        expect(response._body._id).toBe(defi._id);
        expect(response._body.message).toBe("success");
      });
  });
  test("should update a defi", async () => {
    const defi = {
      objectif: "50 metre",
      lienvideo: "https://www.youtube.com/watch?v=Xgy1BBUmq4Y",
    };

    await supertest
      .put("/api/defis/" + savedDefi._id.toString())
      .send(defi)
      .expect(200)
      .then(async (response) => {
        // Check the response
        expect(response._body._id).toBe(savedDefi._id.toString());
        expect(response._body.objectif).toBe(defi.objectif);
        expect(response._body.lienvideo).toBe(defi.lienvideo);

        // Check the data in the database (optional)
        const newDefi = await Defi.findOne({ _id: response._body._id });
        expect(newDefi).toBeTruthy();
        expect(newDefi.objectif).toBe(defi.objectif);
        expect(newDefi.lienvideo).toBe(defi.lienvideo);
      });
  });
  test("should delete a defi using its id ", async () => {
    await supertest
      .delete("/api/defis/" + savedDefi._id.toString())
      .expect(200)
      .then(async () => {
        expect(
          await Defi.findOne({ _id: savedDefi._id.toString() })
        ).toBeFalsy();
      });
  });
});
