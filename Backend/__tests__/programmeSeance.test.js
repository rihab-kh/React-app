const request = require("supertest");
const { createServer } = require("../utils/serverUtils");
const mongoose = require("mongoose");
const ProgrammeSeance = require("../models/ProgrammeSeance");
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
describe("programmeSeance", () => {
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
      .get("/api/programme_seances")
      .expect(201)
      // .set('Authorization', Bearer ${token})
      .then((response) => {
        expect(Array.isArray(response._body)).toBeTruthy();
        expect(response._body.length).toEqual(0);
      });
  });
  test("should add a programme_seances  ", async () => {
    const programmeSeance = {
      title: "title1",
      descriptionTechnique: "des1",
      lienVideo: "www.youtube.com",
    };
    await supertest
      .post("/api/programme_seances")
      .send(programmeSeance)

      .then(async (response) => {
        expect(response._body).toBeTruthy();
        expect(response._body.message).toBe("success");
        savedProgrammeSeance = response._body.model;
      });
  });

  test("should return a single ProgrammeSeance  ", async () => {
    //expect(true).toBe(true);
    await supertest
      .get("/api/programme_seances/" + savedProgrammeSeance._id.toString())
      .expect(200)
      .then((response) => {
        expect(response._body._id).toBe(savedProgrammeSeance._id.toString());
        expect(response._body.title).toBe(savedProgrammeSeance.title);
        expect(response._body.descriptionTechnique).toBe(
          savedProgrammeSeance.descriptionTechnique
        );
        expect(response._body.lienVideo).toBe(savedProgrammeSeance.lienVideo);
        expect(response._body.message).toBe("success");
      });
  });

  test("should update a programme", async () => {
    const data = {
      title: "programme title test",
      descriptionTechnique: "desc",
      lienVideo: "www.abc.com",
    };
    await request(app)
      .put("/api/programme_seances/" + savedProgrammeSeance._id)
      .send(data)
      .expect(200)
      .then((res) => {
        expect(res.body._id).toBe(savedProgrammeSeance._id);
        expect(res.body.title).toBe(data.title);
        expect(res.body.description).toBe(data.description);
      });
  });

  // test("should update a programme_seances", async () => {
  //   const programmeSeance = {
  //     title: "Lieu5",
  //     descriptionTechnique: "desc",
  //     lienVideo: "www.abc.com",
  //   };

  //   await supertest
  //     .put("/api/programme_seances/" + savedProgrammeSeance._id.toString())
  //     .send(lieuEntr)
  //     .expect(200)
  //     .then(async (response) => {
  //       // Check the response
  //       expect(response._body._id).toBe(savedProgrammeSeance._id.toString());
  //       expect(response._body.title).toBe(programmeSeance.title);
  //       expect(response._body.descriptionTechnique).toBe(
  //         programmeSeance.descriptionTechnique
  //       );
  //       expect(response._body.lienVideo).toBe(programmeSeance.lienVideo);

  //       // Check the data in the database (optional)
  //       const newProgrammeSeance = await programmeSeance.findOne({
  //         _id: response._body._id,
  //       });
  //       expect(newProgrammeSeance).toBeTruthy();
  //       expect(newProgrammeSeance.title).toBe(programmeSeance.title);
  //       expect(newProgrammeSeance.descriptionTechnique).toBe(
  //         programmeSeance.descriptionTechnique
  //       );
  //       expect(newProgrammeSeance.lienVideo).toBe(programmeSeance.lienVideo);
  //     });
  // });

  test("should delete a programme using its id", async () => {
    await request(app)
      .delete("/api/programme_seances/" + savedProgrammeSeance._id)
      .expect(200)
      .then((res) => {
        expect(res.body.message).toBe("success");
      });
  });

  // test("should delete a programmeSeance using its id ", async () => {
  //   await supertest
  //     .delete("/api/lieuxEntr/" + savedProgrammeSeance._id.toString())
  //     .expect(200)
  //     .then(async () => {
  //       expect(
  //         await ProgrammeSeance.findOne({
  //           _id: savedProgrammeSeance._id.toString(),
  //         })
  //       ).toBeFalsy();
  //     });
  // });
});
