import express from "express";

import { createProducts, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/product";
import { validateDeleteProduct, validateGetProduct } from "../middleware/validate/product";


const router = express.Router();


router.route("/")
  .get(getAllProducts)
  .post(createProducts)
  .delete(validateDeleteProduct, deleteProduct);

router.route("/:id")
  .get(validateGetProduct, getProduct)
  .patch(updateProduct);

export default router;
