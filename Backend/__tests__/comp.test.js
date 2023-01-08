const request = require("supertest");
const { createServer } = require("../utils/serverUtils");
const mongoose = require("mongoose");
const Comp = require("../models/competence");
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
describe("Comps", () => {
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
  test("should get all comps (empty comps) ", async () => {
    //expect(true).toBe(true);
    await supertest
      .get("/api/comps")
      .expect(201)
      // .set("Authorization", `Bearer ${token}`)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response._body.length).toEqual(0);
      });
  });
  test("should add a comp  ", async () => {
    const comp = {
        nom: "CompTest",
        desccomp: "compétence pour test intégration",
        visibility:"true",
        liencomp:"www.comptest.com",
        

    };
    await supertest
      .post("/api/comps")
      .send(comp)

      .then(async (response) => {
        // console.log(response.);
        expect(response._body).toBeTruthy();
        expect(response._body.message).toBe("success");
        //const res = await Comp.findOne();
        // res.expect(response._body).toBeTruthy();
        // expect(response._body.lienVideo).toBe(comp.lienVideo);
        mess = response._body;
      });
  });

  test("should return a single comp  ", async () => {
    //expect(true).toBe(true);
    await supertest
      .get("/api/comps/" + comp._id)
      .expect(200)
      .then((response) => {
        expect(response._body._id).toBe(comp._id);
        expect(response._body.message).toBe("success");
      });
  });
  test("should update a comp", async () => {
    const comp = {
        nom: "CompTest",
        desccomp: "compétence pour test intégration",
        visibility:"true",
        liencomp:"www.comptest.com",

    };

    await supertest
      .put("/api/comps/" + savedComp._id.toString())
      .send(comp)
      .expect(200)
      .then(async (response) => {
        // Check the response
        expect(response._body._id).toBe(savedComp._id.toString());
        expect(response._body).toBeTruthy();
        expect(response._body.message).toBe("success");

        // Check the data in the database (optional)
        const newComp = await Comp.findOne({ _id: response._body._id });
        expect(newComp).toBeTruthy();
        expect(response._body).toBeTruthy();
        expect(response._body.message).toBe("success");
      });
  });
  test("should delete a comp using its id ", async () => {
    await supertest
      .delete("/api/comps/" + savedComp._id.toString())
      .expect(200)
      .then(async () => {
        expect(
          await Comp.findOne({ _id: savedComp._id.toString() })
        ).toBeFalsy();
      });
  });
});