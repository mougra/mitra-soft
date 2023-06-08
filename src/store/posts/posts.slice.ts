import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '../../models/models'

interface GithubState {
  searchPosts: IPost[]
}
interface PayloadType {
  data: IPost[]
  search: string
}

const initialState: GithubState = {
  searchPosts: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    searchPosts(state, action: PayloadAction<PayloadType>) {
      state.searchPosts = action.payload.data.filter((post: IPost) =>
        post.title.includes(action.payload.search)
      )
      // выборка только по подгруженным постам
    },
  },
})

export const postsActions = postsSlice.actions
export const postsReducer = postsSlice.reducer
