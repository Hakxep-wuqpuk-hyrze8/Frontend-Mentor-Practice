require("dotenv").config();

import sequelize from "./db/sequelize";
import express from "express";
import cors from "cors";

import productRouter from './routes/product';
import imageRouter from './routes/image';

import notFoundMiddleware from './middleware/errorHandle/notFound';
import errorHandlerMiddleware from './middleware/errorHandle/errorHandler';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './openapi/swagger.json';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1/product", productRouter);
app.use("/api/v1/image", imageRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// Server configuration
const port = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    app.listen(port, () => console.log(`Server is listening on port ${port}...`)! );
  } catch (error) {
    console.log(error);
  }
};

startServer();
