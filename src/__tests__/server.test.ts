import request from "supertest";
import server from "../server";

describe("server Test", () => {
  it("Debe revisar que 1 + 1 sea igual a 2", () => {
    expect(1 + 1).toBe(2);
  });

  it("Debe revisar que 1 + 1 NO sea igual a 3", () => {
    expect(1 + 1).not.toBe(3);
  });
});

// Test para la ruta de la API
describe("GET /api", () => {
  it("Debe responder a un llamado de la API", async () => {
    const res = await request(server).get("/api");
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toMatch(/json/);
    expect(res.body.msg).toBe("Desde la API");

    expect(res.statusCode).not.toBe(404);
    expect(res.headers["content-type"]).not.toMatch(/text/);
    expect(res.body.msg).not.toBe("Prueba de conexión");
  });
});
