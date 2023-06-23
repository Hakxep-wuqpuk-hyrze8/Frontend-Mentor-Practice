import express from "express";

import { createProducts, deleteProduct, getAllProducts } from "../controllers/product";
import { validateCreateProduct, validateDeleteProduct } from "../middleware/validate/product";


const router = express.Router();


router.route("/product")
  .get(getAllProducts)
  .post(validateCreateProduct, createProducts)
  .delete(validateDeleteProduct, deleteProduct);

export default router;
