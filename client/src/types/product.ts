export interface ProductType {
  id: number,
  src: string,
  alt: string,
  price: number,
}
export type ProductsType = Array<ProductType>;  