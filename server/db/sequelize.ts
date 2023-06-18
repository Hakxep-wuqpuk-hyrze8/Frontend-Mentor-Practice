import { Sequelize } from "sequelize";

const createSequelize = () => {
  if (!process.env.PG_URL) {
    throw new Error("PG_URL is not set");
  }

  return new Sequelize(process.env.PG_URL);
};

const sequelize = createSequelize();

export default sequelize;

