import express from "express";

const server = express();

// Router
server.get("/", (req, res) => {
  "Desde GET";
});
server.post("/", (req, res) => {
  "Desde POST";
});
server.put("/", (req, res) => {
  "Desde PUT";
});
server.delete("/", (req, res) => {
  "Desde DELETE";
});

export default server;
