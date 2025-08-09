import { Router } from "express";
import { createProduct, getProducts, getProductById } from "./handlers/product";
import { body, param } from "express-validator";
import { handleInputErrors } from "./middleware";

const router = Router();

// Router
router.get("/", getProducts);
router.get(
  "/:id",
  param("id").isUUID().withMessage("ID no válido"),
  handleInputErrors,
  getProductById
);

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

router.put("/", (_req, res) => {
  res.send("Desde PUT");
});

router.delete("/", (_req, res) => {
  res.send("Desde DELETE");
});

export default router;
