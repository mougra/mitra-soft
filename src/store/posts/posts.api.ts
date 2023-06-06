import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost, ServerResponse } from '../../models/models'

export const postsApi = createApi({
  reducerPath: 'posts/api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchPosts: build.query<IPost[], string>({
      query: (search: string) => ({
        url: 'posts',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: ServerResponse<IPost>) => response.data,
    }),
    getPostsRepos: build.query<IPost[], string>({
      query: () => ({
        url: `posts`,
      }),
    }),
    // backend - changes data
    // createUser: build.mutation<any, void>( {
    //   query: () => ''
    // })
  }),
})

export const { useSearchPostsQuery, useLazyGetPostsReposQuery } = postsApi
