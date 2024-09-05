import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_POSTS_ENDPOINT } from '../../constants/apiEndpoints';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch(FETCH_POSTS_ENDPOINT);
  if (!response.ok) {
    throw new Error('Error loading posts!');
  }
  return response.json();
});
