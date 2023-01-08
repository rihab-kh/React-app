const request = require("supertest");
const { createServer } = require("../utils/serverUtils");
const mongoose = require("mongoose");
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
describe("ParametrageCompte", () => {
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
      email: "siwa@gmail.com",
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


  test("should update a user", async () => {
    const user = {
      nom: "Lajjem",
      prenom: "Siwar",
      DateNaiss: "25/03/1998",
    };

    await supertest
      .put("/api/coach/parametrageCompte/" + savedUser._id.toString())
      .send(user)
      .expect(200)
      .then(async (response) => {
        // Check the response
        expect(response._body._id).toBe(savedUser._id.toString());
        expect(response._body.nom).toBe(user.nom);
        expect(response._body.prenom).toBe(user.prenom);
        expect(response._body.DateNaiss).toBe(user.DateNaiss);

        // Check the data in the database (optional)
        const newUser = await User.findOne({ _id: response._body._id });
        expect(newUser).toBeTruthy();
        expect(newUser.nom).toBe(user.nom);
        expect(newUser.ville).toBe(user.ville);
        expect(newUser.pays).toBe(user.pays);
        expect(newUser.adresse).toBe(user.adresse);
      });
  });

});