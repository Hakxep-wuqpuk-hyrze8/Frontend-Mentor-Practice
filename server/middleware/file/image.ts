import { Request, Response, NextFunction } from "express";

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

const uploadImage = (req: Request, res: Response, next: NextFunction) => {
  upload.single('image')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: '檔案上傳錯誤' });
    } else if (err && err.message === "檔案格式錯誤") {
      return res.status(400).json({ error: err.message });
    } else if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: '請選擇一個圖片上傳' });
    }

    next(); 
  });
}

export { uploadImage };