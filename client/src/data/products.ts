import { ProductsType } from "@/types/product"

// default product image
import Product1 from '@/assets/image-product-1.jpg'
import Product2 from '@/assets/image-product-2.jpg'
import Product3 from '@/assets/image-product-3.jpg'
import Product4 from '@/assets/image-product-4.jpg'

export const products: ProductsType = [
 {
  id: 1,
  name: 'Fall Limited Edition Sneakers',
  discription: 'These low-profile sneakers are your perfect casual wear companion. \
        Featuring a durable rubber outer sole, they’ll withstand \
        everything the weather can offer.',
  company: 'Sneaker Company',
  price: 250,
  discount: 0.5,
  src: [
    Product1,
    Product2,
    Product3,
    Product4
  ],
  alt: 'Product',
 },
]