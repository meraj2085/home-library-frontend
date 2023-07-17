/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/",
  }),
  tagTypes: ["books", "wishlist"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "books",
      providesTags: ["books"],
    }),
    getWishlist: builder.query({
      query: () => "wishlist",
      providesTags: ["wishlist"],
    }),
    getTopRecentBooks: builder.query({
      query: () => "/books?limit=10",
      providesTags: ["books"],
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "users/login",
        method: "POST",
        body: data,
      }),
    }),
    signUpUser: builder.mutation({
      query: (data) => ({
        url: "users/signup",
        method: "POST",
        body: data,
      }),
    }),
    addNewBook: builder.mutation({
      query: (data) => ({
        url: "books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    addComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `books/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    addWishlist: builder.mutation({
      query: (data) => ({
        url: "wishlist",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wishlist"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetTopRecentBooksQuery,
  useLoginUserMutation,
  useSignUpUserMutation,
  useAddNewBookMutation,
  useAddCommentMutation,
  useAddWishlistMutation,
  useGetWishlistQuery,
} = api;
