import express from "express";

const server = express();

// Router
server.get("/", (req, res) => {
  res.json("Desde GET");
});

server.post("/", (req, res) => {
  res.send("Desde POST");
});

server.put("/", (res, req) => {
  res.send("Desde PUT");
});

server.delete("/", (req, res) => {
  res.send("Desde DELETE");
});

export default server;
