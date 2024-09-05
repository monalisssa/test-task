import { createSlice } from '@reduxjs/toolkit';
import { fetchComments } from '../actions/commentsActions';

interface CommentsState {
  post: any;
  comments: any;
  loading: boolean;
  error: string | undefined;
}

const initialState: CommentsState = {
  post: {},
  comments: [],
  loading: true,
  error: '',
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload.comments;
        state.post = action.payload.post[0];
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default commentsSlice.reducer;
