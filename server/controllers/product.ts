import { Request, Response } from "express";
import { Product, ProductCreationAttributes } from '../models/product';

// @desc Get all notes 
// @route GET /api/v1/product
// @access Private
export const getAllProducts = (req: Request, res: Response) => {
  res.status(200).json({
    id: 1,
    name: "Product",
  });
};


// POST API 路由，將產品輸入到資料庫
export const createProducts = async (req: Request, res: Response) => {
  const { name, description, company, price, discount, images } = req.body;

  // 創建一個新的產品
  const newProduct: ProductCreationAttributes = {
    name,
    description,
    company,
    price,
    discount,
    images: [Buffer.from(images, 'base64')] // 將 base64 字串轉換為二進制數據
  };

  // 插入產品到資料庫
  const product = await Product.create(newProduct);
  res.status(201).json(product);
};
