import { Optional } from "sequelize";

export interface ImageAttributes {
  id: number;
  image: Buffer;
  productId: number;
}

export interface ImageCreationAttributes extends Optional<ImageAttributes, 'id'> {}

