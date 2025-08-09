import { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import Products from "../models/Product.model";

export const createProduct = async (req: Request, res: Response) => {
  // Validar los datos del formulario
  await check("name")
    .notEmpty()
    .withMessage(" El nombre del producto es obligatorio")
    .run(req);

  await check("price")
    .notEmpty()
    .withMessage(" El precio del producto es obligatorio")
    .isNumeric()
    .withMessage("Valor no válido")
    .custom((value) => value > 1)
    .withMessage("Precio NO válido")
    .run(req);

  // Recuperar los errores de la respuesta del servidor
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Enviar el producto a la base de datos
  const product = await Products.create(req.body);

  // Retornar el producto creado
  res.json({ data: product });
};
