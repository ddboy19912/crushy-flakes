import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ganbaru.xyz/admin-api/v1',
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        'Bearer 1984|gBj53IM483eU0rNgIcdcSpUoBgCoB3fd34Z8uR6O'
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getOffers: builder.query({ query: () => '/offers' }),
  }),
});

export const { useGetOffersQuery } = mainApi;
