import { Image } from "./image";
import { Product } from "./product";

Product.hasMany(Image, {
  foreignKey: 'productId',
  as: 'images',
});

Image.belongsTo(Product, {
  foreignKey: 'productId',
  as: 'product',
});

export { Image, Product };