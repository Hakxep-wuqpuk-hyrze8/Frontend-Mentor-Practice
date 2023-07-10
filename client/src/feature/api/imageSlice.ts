import { apiSlice } from "./apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProductImages: builder.query({
      query: (productId: number) => `/images/${productId}`,
    }) 
  })
})

export const { useGetProductImagesQuery } = extendedApiSlice;