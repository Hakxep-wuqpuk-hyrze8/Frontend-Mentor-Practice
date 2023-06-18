import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db/sequelize";

// 定義產品模型
interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  company: string;
  price: number;
  discount: number;
  images: Buffer[];
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
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

Product.init({
  id: { 
    type: DataTypes.NUMBER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Product description...",
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  discount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.BLOB),
    allowNull: false,
  }
}, {
  sequelize,
  modelName: "Product",
});


export { Product, ProductAttributes, ProductCreationAttributes };
