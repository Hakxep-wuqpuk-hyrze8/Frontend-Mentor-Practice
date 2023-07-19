import express from 'express';
import { createImage } from '../controllers/image';
import { deleteImage, getImages } from '../controllers/image2';
import { uploadImage } from '../middleware/file/image';

const router = express.Router();

router.route('/:productId')
  .get(getImages)
  .post(uploadImage, createImage)

router.route('/:imageId')
  .delete(deleteImage);

export default router;