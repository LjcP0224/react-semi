import { configureStore } from '@reduxjs/toolkit'

import appReducer from './modules/app'

export const store = configureStore({
  reducer: {
    app: appReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
