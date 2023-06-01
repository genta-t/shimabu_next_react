import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/counter/counterSlice'
import postsReducer from '../components/features/post'

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
})