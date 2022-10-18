import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ganbaru.xyz/admin-api/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', process.env.REACT_APP_YOUR_AUTH_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getOffers: builder.query({ query: () => '/offers' }),
  }),
});

export const { useGetOffersQuery } = mainApi;
