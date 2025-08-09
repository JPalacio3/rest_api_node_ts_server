import { Request, Response } from "express";
import Products from "../models/Product.model";

// Handler para obtener todos los productos
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Products.findAll({
      order: [["createdAt", "DESC"]], // Ordenar por fecha de creación descendente
      attributes: { exclude: ["createdAt", "updatedAt"] }, // Excluir campos innecesarios
    });
    res.json({ data: products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

// Handler para obtener un solo producto por ID
export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Products.findByPk(id);

    // Validar si no existe el producto
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json({ data: product });
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
    res.status(500).json({ error: `"Error al crear el producto" : ${error} ` });
  }
};
