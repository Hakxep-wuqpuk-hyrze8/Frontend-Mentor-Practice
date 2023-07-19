require("dotenv").config();

import sequelize from "./db/sequelize";
import express from "express";
import cors from "cors";

import productRouter from './routes/product';
import imageRouter from './routes/image';
import image2Router from './routes/image2';

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
app.use("/api/v2/image", image2Router);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// Server configuration
const port = process.env.PORT || 8000;

// sequelize.sync({ force: true })
//   .then(() => {
//     console.log('Database has been synchronized.');
//   })
//   .catch((error) => {
//     console.error('Failed to synchronize database:', error);
//   });
  
const startServer = async () => {
  try {
    await sequelize.authenticate();
    app.listen(port, () => console.log(`Server is listening on port ${port}...`)! );
  } catch (error) {
    console.log(error);
  }
};

startServer();
