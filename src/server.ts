import express from "express";
import router from "./router";
import db from "./config/db";
import colors from "colors";

// Conectar a  la base de datos
async function connectDB() {
  try {
    await db.authenticate();
    await db.sync();

    console.log(colors.bold.bgGreen.white("Conexión a la base de datos"));
  } catch (error: any) {
    console.error(
      colors.bold.white.bgRed("Hubo un error al conectar a la base de datos")
    );
    console.error(colors.red(error));
  }
}

connectDB();

// Instancia del servidor de express
const server = express();

// Leer datos del formulario
server.use(express.json());

// Importación del router para obtener las peticiones de la API
server.use("/api/products", router);

export default server;
