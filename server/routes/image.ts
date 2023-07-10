import express from 'express';
import { createImage, getImages } from '../controllers/image';
import { uploadImage } from '../middleware/file/image';

const router = express.Router();

router.route('/:productId')
  .get(getImages)
  .post(uploadImage, createImage);

export default router;