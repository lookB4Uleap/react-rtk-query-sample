import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define your base API
export const api = createApi({
  reducerPath: 'api',
  //
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ca5ac22832cda513fd45.free.beeceptor.com/api/',
  }),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    // Define endpoints here
    getUsers: builder.query<any, void>({
      query: () => 'users',
      providesTags: ['users'], // provide tag to auto refetch on invalidate
    }),
    getSpecificUser: builder.query<any, { id: string }>({
      query: (id) => `users/${id}`,
    }),
    createUser: builder.mutation<any, { data: string }>({
      query(body) {
        return {
          url: 'users',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['users'], // invalidate users cache on post, put, patch
    }),
  }),
});

// Export hooks for each endpoint
export const {
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useGetSpecificUserQuery,
  useLazyGetSpecificUserQuery,
  useCreateUserMutation,
} = api;
