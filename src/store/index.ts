import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './posts/posts.slice'
import { postsApi } from './posts/posts.api'
import { commentsApi } from './comments//comments.api'
import { userApi } from './users/user.api'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      commentsApi.middleware,
      userApi.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
