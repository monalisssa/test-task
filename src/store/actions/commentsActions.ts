import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_COMMENTS_ENDPOINT, FETCH_POST_ENDPOINT } from '../../constants/apiEndpoints';

export const fetchComments = createAsyncThunk('comments/fetchComments', async (id: string) => {
  const fetchWithErrorHandling = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Error loading comments!`);
    return res.json();
  };

  const [post, comments] = await Promise.all([
    fetchWithErrorHandling(FETCH_POST_ENDPOINT + id),
    fetchWithErrorHandling(FETCH_COMMENTS_ENDPOINT + id),
  ]);

  return { post, comments };
});
