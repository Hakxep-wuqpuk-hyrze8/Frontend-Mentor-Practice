import { Request, Response, NextFunction } from "express";

const validateParams = (requiredParams: string[]) => (req: Request, res: Response, next: NextFunction) => {
  const missingParams: string[] = [];

  for (const param of requiredParams) {
    if (!(param in req.body)) {
      missingParams.push(param);
    }
  }

  if (missingParams.length > 0) {
    return res.status(400).json({ error: `Missing required parameters: ${missingParams.join(', ')}` });
  }

  next();
};

export default validateParams;