import { ImageArrayType } from "@/types/image";
import { apiSlice } from "./apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProductImages: builder.query<ImageArrayType, number>({
      query: (productId: number) => `/v2/image/${productId}`,
    }) 
  })
})

export const { useGetProductImagesQuery } = extendedApiSlice;