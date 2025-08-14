import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  updateAvailability,
  deleteProduct,
} from "./handlers/product";
import { body, param } from "express-validator";
import { handleInputErrors } from "./middleware";

const router = Router();

// Router
router.get("/", getProducts);

// Ruta para obtener un producto por ID
router.get(
  "/:id",
  param("id").isUUID().withMessage("ID no válido"),
  handleInputErrors,
  getProductById
);

// Ruta para crear un producto
router.post(
  "/",
  // Validar los datos del formulario
  body("name").notEmpty().withMessage(" El nombre del producto es obligatorio"),

  body("price")
    .notEmpty()
    .withMessage(" El precio del producto es obligatorio")
    .isNumeric()
    .withMessage("Valor no válido")
    .custom((value) => value > 1)
    .withMessage("Precio NO válido"),

  // Middleware para manejar los errores de entrada
  handleInputErrors,

  // Handler para crear el producto
  createProduct
);

// Ruta para actualizar el producto
router.put(
  "/:id",
  param("id").isUUID().withMessage("ID no válido"),

  // Validar los datos del formulario
  body("name").notEmpty().withMessage(" El nombre del producto es obligatorio"),

  body("price")
    .notEmpty()
    .withMessage(" El precio del producto es obligatorio")
    .isNumeric()
    .withMessage("Valor no válido")
    .custom((value) => value > 1)
    .withMessage("Precio NO válido"),
  body("availability")
    .optional()
    .isBoolean()
    .withMessage("Valor para disponibilidad no válido"),

  // Middleware para manejar los errores de entrada
  handleInputErrors,
  updateProduct
);

// Ruta para actualizar la disponibilidad del producto
router.patch(
  "/:id",
  param("id").isUUID().withMessage("ID no válido"),
  handleInputErrors,
  updateAvailability
);

// Ruta para eliminar un producto
router.delete(
  "/:id",
  param("id").isUUID().withMessage("ID no válido"),
  handleInputErrors,
  deleteProduct
);

export default router;
