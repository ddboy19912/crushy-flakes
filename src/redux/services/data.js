import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import useToken from '../../useToken';

const tokenString = sessionStorage.getItem('token');
const userToken = JSON.parse(tokenString);

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ganbaru.xyz/admin-api/v1',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${userToken}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getOffers: builder.query({ query: () => '/offers' }),
  }),
});

export const { useGetOffersQuery } = mainApi;
