import { Request, Response, NextFunction } from "express";
import validateParams from "./validataParams";


const validateGetProduct = (req: Request, res: Response, next: NextFunction) => {
  const productId = req.params.id;

  if (!Number.isInteger(Number(productId))) {
    return res.status(400).json({ error: 'Invalid product ID' });
  }
  
  next();
}

const validateDeleteProduct = (req: Request, res: Response, next: NextFunction) => {
  validateParams(["id"])(req, res, next);
}

export { validateGetProduct, validateDeleteProduct };