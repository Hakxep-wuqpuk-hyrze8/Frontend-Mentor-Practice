import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from '../feature/sidebar/sidebarSlice'

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;