import { NextFunction, Request, Response } from "express";
import { Product } from '../models/product';
import { NotFoundError } from "../errors";
import { Image } from "../models";
import sequelize from "../db/sequelize";
import { ImageAttributes, ImageCreationAttributes } from './../types/image';

// @desc Get Images from a Product 
// @route GET /api/v1/images/:productId
// @access Private
export const getImages = async (req: Request, res: Response, next: NextFunction) => {
  const productId = req.params.productId;
  const product = await Product.findByPk(productId, {
    include: Product.associations.images,
    rejectOnEmpty: true
  });

  if (!product) {
    const err = new NotFoundError('Product not found');
    return next(err);
  }

  const images = product.images;

  return res.status(200).json(images);
};

// @desc Create Images from a Product 
// @route POST /api/v1/images/:productId
// @access Private
export const createImage = async (req: Request, res: Response, next: NextFunction) => {
  const file = req.file as Express.Multer.File;

  // 同步資料庫和模型
  await sequelize.sync();

  const productId = req.params.productId;

  const newImage: ImageCreationAttributes = {
    image: file.buffer,
    productId: Number(productId),
  }

  const image = await Image.create(newImage);

  return res.status(200).json(image);
};