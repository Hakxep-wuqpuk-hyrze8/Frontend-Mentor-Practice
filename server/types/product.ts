import { Optional } from "sequelize";

export interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  company: string;
  price: number;
  discount: number;
}

export interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

