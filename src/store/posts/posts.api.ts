import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost, ServerResponse } from '../../models/models'

interface Payload {
  page?: number
  limit?: number
  search?: string
}

export const postsApi = createApi({
  reducerPath: 'posts/api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchPosts: build.query<IPost[], Payload>({
      query: ({ page = 1, limit = 9, search = '' }) => ({
        url: 'posts',
        params: {
          q: search,
          // per_page: 10,
          _page: page,
          _limit: limit,
        },
      }),
      // transformResponse: (response: ServerResponse<IPost>) => response.data,
    }),
    sortPosts: build.query<IPost[], Payload>({
      query: ({ page = 1, limit = 9 }) => ({
        url: 'posts',
        params: {
          _sort: 'title',
          // per_page: 10,
          _page: page,
          _limit: limit,
        },
      }),
      // transformResponse: (response: ServerResponse<IPost>) => response.data,
    }),
    getPosts: build.query<IPost[], Payload>({
      query: ({ page = 1, limit = 9 }) => ({
        url: `posts`,
        // ?_page=2&_limit=9
        params: {
          _page: page,
          _limit: limit,
        },
      }),
    }),
    // backend - changes data
    // createUser: build.mutation<any, void>( {
    //   query: () => ''
    // })
  }),
})

export const {
  useLazySearchPostsQuery,
  useLazySortPostsQuery,
  useLazyGetPostsQuery,
  useGetPostsQuery,
} = postsApi
