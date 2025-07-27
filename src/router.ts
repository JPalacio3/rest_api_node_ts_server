import { Router } from "express";
import { createProduct } from "./handlers/product";

const router = Router();

// Router
router.get("/", (req, res) => {
  res.json("Desde GET");
});

router.post("/", createProduct);

router.put("/", (req, res) => {
  res.send("Desde PUT");
});

router.delete("/", (req, res) => {
  res.send("Desde DELETE");
});

export default router;
