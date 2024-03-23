import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL, API_KEY } from "../../config/constants";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({ url: `/products${API_KEY}&offset=${params?.offset}` }),
    }),
    getProductDetails: builder.query({
      query: ({ id }) => ({ url: `/products/${id}${API_KEY}` }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery, useToggleInWishlistMutation } = productApi;
