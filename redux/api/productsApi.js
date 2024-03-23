import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "../../config/constants";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({ url: "/products" }),
    }),
    getProductDetails: builder.query({
      query: ({ id }) => ({ url: `/products/${id}` }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery, useToggleInWishlistMutation } = productApi;
