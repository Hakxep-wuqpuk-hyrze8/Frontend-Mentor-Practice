import { ProductType, ProductsType } from '@/types/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1' }),
  endpoints: (builder) => ({
    getAllProduct: builder.query<ProductsType, void>({
      query: () => '/product'
    }),
    getProduct: builder.query<ProductType, number>({
      query: (productId: number) => `/product/${productId}`
    }),
  }),
})

export const { useGetAllProductQuery, useGetProductQuery } = apiSlice;