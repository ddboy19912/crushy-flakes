import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const testApi = createApi({
  reducerPath: 'testApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/users',
    }),
  }),
});

export const { useGetPostsQuery } = testApi;
