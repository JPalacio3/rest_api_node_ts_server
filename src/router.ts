import { Router } from "express";
const router = Router();

// Router
router.get("/", (req, res) => {
  res.json("Desde GET");
});

router.post("/", (req, res) => {
  res.send("Desde POST");
});

router.put("/", (res, req) => {
  res.send("Desde PUT");
});

router.delete("/", (req, res) => {
  res.send("Desde DELETE");
});

export default router;
