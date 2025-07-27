import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import Products from "../models/Product.model";
dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL!, {
  models: [__dirname + "/.../models/**/*.ts"],
  schema: process.env.SCHEMA,
});

db.addModels([Products]);
export default db;
