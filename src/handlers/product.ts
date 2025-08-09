import { Request, Response } from "express";
import Products from "../models/Product.model";

export const createProduct = async (req: Request, res: Response) => {
  try {
    // Enviar el producto a la base de datos
    const product = await Products.create(req.body);
    // Retornar el producto creado
    res.json({ data: product });
  } catch (error) {
    console.error(error);
  }
};
