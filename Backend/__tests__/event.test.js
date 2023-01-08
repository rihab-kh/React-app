const request = require("supertest");
const { createServer } = require("../utils/serverUtils");
const mongoose = require("mongoose");
const Event = require("../models/event");
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
  test("should get all programmeSeance (empty programmeSeance) ", async () => {
    //expect(true).toBe(true);
    await supertest
      .get("/api/event")
      .expect(201)
      // .set('Authorization', Bearer ${token})
      .then((response) => {
        expect(Array.isArray(response._body)).toBeTruthy();
        expect(response._body.length).toEqual(0);
      });
  });
  test("should add a event  ", async () => {
    const event = {
      nom: "event1",
      description: "ce événement",
      date_debut: "2022-05-29",
      date_fin: "2022-05-30",
      etat: true,
      lieu: "Tunis",
      event_image: "cities.png",
    };
    await supertest
      .post("/api/event")
      .send(event)

      .then(async (response) => {
        expect(response._body).toBeTruthy();
        expect(response._body.message).toBe("success");
        mess = response._body;
      });
  });

  test("should return a single event  ", async () => {
    //expect(true).toBe(true);
    await supertest
      .get("/api/event/" + event._id)
      .expect(201)
      .then((response) => {
        expect(response._body._id).toBe(event._id);
        expect(response._body.message).toBe("success");
      });
  });
  test("should update a event", async () => {
    const eventUpdate = {
      nom: "event2",
      description: "ce événement",
      date_debut: "2022-05-29",
      date_fin: "2022-05-30",
      etat: true,
      lieu: "Manouba",
      event_image: "cities.png",
    };

    await supertest
      .put("/api/event/" + Update._id.toString())
      .send(eventUpdate)
      .expect(201)
      .then(async (response) => {
        // Check the response
        expect(response._body._id).toBe(Update._id.toString());
        expect(response._body).toBeTruthy();
        expect(response._body.message).toBe("success");

        // Check the data in the database (optional)
        const newevent = await Event.findOne({ _id: response._body._id });
        expect(newevent).toBeTruthy();
        expect(response._body).toBeTruthy();
        expect(response._body.message).toBe("success");
      });
  });
  test("should delete a event using its id ", async () => {
    await supertest
      .delete("/api/event/" + Update._id.toString())
      .expect(201)
      .then(async () => {
        expect(await Event.findOne({ _id: Update._id.toString() })).toBeFalsy();
      });
  });
});
