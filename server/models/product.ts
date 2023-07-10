import { Association, DataTypes, Model, NonAttribute } from 'sequelize';
import sequelize from './../db/sequelize';
import { ProductAttributes, ProductCreationAttributes } from '../types/product';
import { Image } from './image';

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public company!: string;
  public price!: number;
  public discount!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  declare images?: NonAttribute<Image[]>;

  declare public static associations: { 
    images: Association<Product, Image>;
  };
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
  },
  {
    sequelize,
    modelName: 'Product',
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    }
  }
);


export { Product };