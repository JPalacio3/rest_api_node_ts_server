import { Request, Response } from "express";
import Products from "../models/Product.model";

// Handler para obtener todos los productos
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Products.findAll({
      order: [["createdAt", "DESC"]], // Ordenar por fecha de creación descendente
    });
    res.json({ data: products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

// Handler para guardar los productos en la base de datos
export const createProduct = async (req: Request, res: Response) => {
  try {
    // Enviar el producto a la base de datos
    const product = await Products.create(req.body);
    // Retornar el producto creado
    res.json({ data: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el producto" });
  }
};
