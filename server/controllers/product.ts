import { Request, Response } from "express";
import { Product,  } from '../models/product';
import sequelize from "../db/sequelize";
import { ProductCreationAttributes } from "../types/product";

// @desc Get all Products 
// @route GET /api/v1/product
// @access Private
export const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.findAll();
  res.status(200).json(products);
};

// @desc Get a Product 
// @route GET /api/v1/product
// @access Private
export const getProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = await Product.findByPk(productId);
  res.status(200).json(product);
};


// @desc post product 
// @route POST /api/v1/product
export const createProducts = async (req: Request, res: Response) => {
  const { name, description, company, price, discount } = req.body;

  // 同步資料庫和模型
  await sequelize.sync();

  // 創建一個新的產品
  const newProduct: ProductCreationAttributes = {
    name,
    description,
    company,
    price,
    discount,
  };

  // 插入產品到資料庫
  const product = await Product.create(newProduct);
  res.status(201).json(product);
};

// @desc update product 
// @route UPDATE /api/v1/product
// @access Private
export const updateProduct = async (req: Request, res: Response) => {''
  const product = req.body;
  const productId = req.params.id;

  const updatedProduct = await Product.update(product, {
    where: {
      id: productId
    }
  });

  if (updatedProduct) {
    const product = await Product.findByPk(productId);
    res.status(200).json(product);
  }
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
