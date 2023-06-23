import { Request, Response } from "express";
import { Product, ProductCreationAttributes } from '../models/product';
import sequelize from "../db/sequelize";

// @desc Get all Products 
// @route GET /api/v1/product
// @access Private
export const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.findAll();
  res.status(200).json(products);
};


// @desc post product 
// @route POST /api/v1/product
export const createProducts = async (req: Request, res: Response) => {
  const { name, description, company, price, discount } = req.body;
  const files = req.files as Express.Multer.File[];

  // 同步資料庫和模型
  await sequelize.sync();

  // 創建一個新的產品
  const newProduct: ProductCreationAttributes = {
    name,
    description,
    company,
    price,
    discount,
    images: files.map(file => file.buffer)
  };

  // 插入產品到資料庫
  const product = await Product.create(newProduct);
  res.status(201).json(newProduct);
};

// @desc update product 
// @route UPDATE /api/v1/product
// @access Private
export const updateProducts = async (req: Request, res: Response) => {
};

// @desc Delete Product 
// @route DELETE /api/v1/product
// @access Private
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.body;

  await Product.destroy({
    where: { id: id },
  });

  res.status(200).json({ message: 'Product deleted' });
};
