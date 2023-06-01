import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "./dummyData";

const postSlice = createSlice({
  name: 'posts',
  initialState: { value: PostsData },
  reducers: {
    addPost: (state, action) => {
      state.value.push(action.payload);
    },
    deletePost: (state, action) => {
      state.value = state.value.filter((post) => post.id !== action.payload.id);
      //filterは条件に一致したものを残す。idとidが一致していない時に残す。
    },
  },
})

export const { addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
