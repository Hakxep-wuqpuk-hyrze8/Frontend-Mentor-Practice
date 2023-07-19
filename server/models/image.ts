import { DataTypes, ForeignKey, Model, NonAttribute } from "sequelize";
import { ImageCreationAttributes, ImageAttributes } from "../types/image";
import sequelize from './../db/sequelize';
import { Product } from "./product";

class Image extends Model<ImageAttributes, ImageCreationAttributes> implements ImageAttributes {
  public id!: number;
  public data!: Buffer;
  public productId!: ForeignKey<Product['id']>;

  declare owner?: NonAttribute<Product>;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    data: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Image',
  }
);



export { Image };