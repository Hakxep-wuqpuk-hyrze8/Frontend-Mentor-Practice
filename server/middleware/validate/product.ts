import { Request, Response, NextFunction } from "express";
import validateParams from "./validataParams";

import multer from 'multer';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 2 * 1024 * 1024,  // 限制 2 MB
  },
  fileFilter (req, file, callback) {  // 限制檔案格式為 image
    if (!file.mimetype.match(/^image/)) {
      const error = new Error("檔案格式錯誤");
      callback(error);
    } else {
      callback(null, true);
    }
  }
});

const validateCreateProduct = (req: Request, res: Response, next: NextFunction) => {
  upload.array('images', 12)(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: '檔案上傳錯誤' });
    } else if (err && err.message === "檔案格式錯誤") {
      return res.status(400).json({ error: err.message });
    } else if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Internal server error' });
    } 

    const files = req.files;
    if (!files || files.length === 0) {
      return res.status(400).json({ error: '請至少選擇一個圖片上傳' });
    } 

    next();
  });
}


const validateDeleteProduct = (req: Request, res: Response, next: NextFunction) => {
  validateParams(["id"])(req, res, next);
}

export { validateCreateProduct, validateDeleteProduct };