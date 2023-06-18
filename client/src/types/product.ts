export interface ProductType {
  id: number,
  name: string,
  discription: string,
  company: string,
  price: number,
  discount: number,
  src: string[],
  alt?: string,
}
export type ProductsType = Array<ProductType>;  