import { configureStore } from "@reduxjs/toolkit";
import {postsReducer} from './slices/posts'

const store = configureStore({
  reducer: {
    post: postsReducer,
  }
})

export default store;
