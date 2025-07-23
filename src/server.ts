import express from "express";
import router from "./router";
import db from "./config/db";

// Conectar a  la base de datos
async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log("Conexión a la base de datos");
  } catch (error) {
    console.error("Hubo un error al conectar a la base de datos");
    console.error(error);
  }
}

connectDB();
const server = express();

// Importación del router para obtener las peticiones de la API
server.use("/api/products", router);

export default server;
