import express from "express";
const router = express.Router();

import { createProducts, getAllProducts } from "../controllers/product";

router.route("/product").get(getAllProducts).post(createProducts);

export default router;
