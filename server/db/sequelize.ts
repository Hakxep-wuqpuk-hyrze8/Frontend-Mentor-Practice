import { Sequelize } from "sequelize";

const createSequelize = () => {
  if (!process.env.PG_URL || !process.env.PG_PASSWORD) {
    throw new Error("PG_URL is not set");
  }

  return new Sequelize('postgres', 'postgres', process.env.PG_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
  });
};

const sequelize = createSequelize();

export default sequelize;

