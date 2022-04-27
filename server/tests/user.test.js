const request = require("supertest");
require("dotenv").config();

const User = require("../models/User");

const baseUrl = process.env.BASE_URL;

beforeEach(async () => {
  await User.remove();
});

describe("users API", () => {
  it("POST /users --> create user", async () => {
    const response = await request(baseUrl)
      .post("/users")
      .send({
        name: "Jahid Hiron",
        email: "ayz@gmail.com",
        password: "jaHid1782?",
      })
      .expect(201);

    const user = await User.findOne({
      where: { userId: response._body.user.id },
    });

    expect(response._body).toMatchObject({
      user: {
        id: response._body.user.id,
        email: response._body.user.email,
      },
      token: response._body.token,
    });
    expect(user.password).not.toBe("jaHid1782?");
  });

  it("POST /users/signup-with-google --> ( signin && user_exist ) || signup", async () => {
    const response = await request(baseUrl)
      .post("/users/signup-with-google")
      .send({
        email: "namehiron.96@gmail.com",
        name: "Jahidul Islam Hiron",
        googleId: "115985087602801330728",
        avatar:
          "https://lh3.googleusercontent.com/a-/AOh14Gj3MBvKGdV0SG5v9LDxTi9uDIwltqCU9zjdb_TW5Q=s96-c",
      })
      .expect(201);

    expect(response._body).toMatchObject({
      user: {
        id: response._body.user.id,
        email: response._body.user.email,
      },
      token: response._body.token,
    });
  });
});
