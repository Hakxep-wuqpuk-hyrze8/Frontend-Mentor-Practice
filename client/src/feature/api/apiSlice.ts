import { ProductType, ProductsType } from '@/types/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
  endpoints: (builder) => ({
    getAllProduct: builder.query<ProductsType, void>({
      query: () => '/v1/product'
    }),
    getProduct: builder.query<ProductType, number>({
      query: (productId: number) => `/v1/product/${productId}`
    }),
  }),
})

export const { useGetAllProductQuery, useGetProductQuery } = apiSlice;