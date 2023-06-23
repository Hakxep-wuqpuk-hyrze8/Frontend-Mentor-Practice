import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/product'
    }),
    getProduct: builder.query({
      query: (productId) => `/product/${productId}`
    }),
  }),
})