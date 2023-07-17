/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/",
  }),
  tagTypes: ["books", "wishlist", "reading"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "books",
      providesTags: ["books"],
    }),
    getWishlist: builder.query({
      query: (data) => ({
        url: `wishlist/${data}`,
      }),
      providesTags: ["wishlist"],
    }),
    getReading: builder.query({
      query: (data) => ({
        url: `reading/${data}`,
      }),
      providesTags: ["reading"],
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
    addReading: builder.mutation({
      query: (data) => ({
        url: "reading",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reading"],
    }),
    updateRead: builder.mutation({
      query: (data) => ({
        url: `reading/${data}`,
        method: "PATCH",
      }),
      invalidatesTags: ["reading"],
    }),
    editBook: builder.mutation({
      query: ({id, data}) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (data) => ({
        url: `books/${data}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
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
  useAddReadingMutation,
  useGetReadingQuery,
  useUpdateReadMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = api;
