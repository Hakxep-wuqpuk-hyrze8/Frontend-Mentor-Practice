import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from './../db/sequelize';

interface ProductAttributes {
  id: number;
  name: string;
  description?: string;
  company?: string;
  price: number;
  discount?: number;
  images?: Buffer[];
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

export class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public company!: string;
  public price!: number;
  public discount!: number;
  public images!: Buffer[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: 'Product description...',
    },
    company: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.FLOAT,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.BLOB),
    },
  },
  {
    sequelize,
    modelName: 'Product',
  }
);

export { ProductCreationAttributes };
