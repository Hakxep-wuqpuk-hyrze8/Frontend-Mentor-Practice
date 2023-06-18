require("dotenv").config();

import express from "express";
import sequelize from "./db/sequelize";
const app = express();

import productRouter from './routes/product'
import createSequelize from "./db/sequelize";

app.use("/api/v1", productRouter);

// Server configuration
const port = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    app.listen(port, console.log(`Server is listening on port ${port}...`)! );
  } catch (error) {
    console.log(error);
  }
};

startServer();
