import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { postsReducer } from './posts/posts.slice'
import { postsApi } from './posts/posts.api'
import { commentsApi } from './comments//comments.api'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    // posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, commentsApi.middleware),
  // githubApi.middleware,
})

// setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
