/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "books",
    }),
    getTopRecentBooks: builder.query({
      query: () => "/books?limit=10",
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "users/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetTopRecentBooksQuery, useLoginUserMutation } = api;
