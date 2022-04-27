const request = require("supertest");
require("dotenv").config();

const baseUrl = process.env.BASE_URL;

describe("auth API", () => {
  it("POST /auth --> authenticate user", async () => {
    const response = await request(baseUrl)
      .post("/auth")
      .send({
        email: "ayz@gmail.com",
        password: "jaHid1782?",
      })
      .expect([200, 404]);

    if (response?._body?.user?.id) {
      expect(response._body).toMatchObject({
        user: {
          id: response?._body?.user?.id,
          email: response?._body?.user?.email,
        },
        token: response?._body?.token,
      });
    } else if (response?._body?.errors) {
      expect(response._body).toMatchObject({
        errors: {
          email: {
            msg: "Invalid Credential!",
          },
        },
      });
    }
  });
});
