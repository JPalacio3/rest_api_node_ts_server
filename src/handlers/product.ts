import { Request, Response } from "express";

export default function createProduct(req: Request, res: Response) {
  console.log(req.body);
  res.send("Hola mundo Desde POST");
}
