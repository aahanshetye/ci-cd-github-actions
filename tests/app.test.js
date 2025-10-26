const request = require("supertest");
const { app, server } = require("../src/index.js");

afterAll(() => {
  server.close();
});

describe("API", () => {
  it("GET /health returns ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});
