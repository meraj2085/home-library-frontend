import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1/',
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
        query: () => 'books',
    }),
    getTopRecentBooks: builder.query({
        query: () => '/books?limit=10',
    })
  }),
});

export const { useGetBooksQuery, useGetTopRecentBooksQuery } = api;