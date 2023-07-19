import { NextFunction, Request, Response } from "express";
import { Product } from '../models/product';
import { NotFoundError } from "../errors";
import { Image } from "../models";
import sequelize from "../db/sequelize";
import { ImageAttributes, ImageCreationAttributes, } from './../types/image';

// @desc Get Images from a Product 
// @route GET /api/v2/images/:productId
// @access Private
export const getImages = async (req: Request, res: Response, next: NextFunction) => {
  const productId = req.params.productId;

  if (!productId) {
    const err = new NotFoundError('Product not found');
    return next(err);
  }

  const product = await Product.findByPk(productId, {
    include: Product.associations.images,
    rejectOnEmpty: true
  });

  if (!product) {
    const err = new NotFoundError('Product not found');
    return next(err);
  }

  const images = product.images;

  images.forEach((image) => {
    console.log(image.dataValues.id);
  });

  const formattedImage = images.map(image =>{
    const imageData = image.dataValues;
    const base64Data = Buffer.from(imageData.data).toString('base64');
    return {
      id: imageData.id,
      data: base64Data,
      productId: imageData.productId,
    }
  });

  return res.status(200).json(formattedImage);
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
    data: file.buffer,
    productId: Number(productId),
  }

  const image = await Image.create(newImage).catch(
    () => { return res.status(500).json("圖片創建時發生錯誤"); },);

  return res.status(200).json(image);
};

// @desc Delete Images from a Product 
// @route DELETE /api/v1/images/:imageId
// @access Private
export const deleteImage = async (req: Request, res: Response, next: NextFunction) => {
  const imageId = req.params.imageId;

  await Image.destroy({
    where: { id: imageId },
  });

  res.status(200).json({ message: 'Image deleted' });
};