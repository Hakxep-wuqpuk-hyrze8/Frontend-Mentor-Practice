export interface ProductType {
  id: number,
  name: string,
  discription: string,
  company: string,
  price: number,
  discount: number,
}
export type ProductsType = Array<ProductType>;  

