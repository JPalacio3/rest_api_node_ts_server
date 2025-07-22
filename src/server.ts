import express from "express";
import router from "./router";

const server = express();

// Importación del router para obtener las peticiones de la API
server.use("/api/products", router);

export default server;
