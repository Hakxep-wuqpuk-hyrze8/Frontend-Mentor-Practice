import { Optional } from "sequelize";

export interface ImageAttributes {
  id: number;
  data: Buffer;
  productId: number;
}

export interface ImageCreationAttributes extends Optional<ImageAttributes, 'id'> {}
