import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_USER_ENDPOINT } from '../../constants/apiEndpoints';
import { IUser } from '../../types/name';

export const fetchUser = createAsyncThunk<IUser, string>(
  'user/fetchUser',
  async (username: string) => {
    const response = await fetch(`${FETCH_USER_ENDPOINT}${username}`);

    if (!response.ok) {
      throw new Error('Error loading user!');
    }

    const data: IUser[] = await response.json();

    if (data.length === 0) {
      throw new Error('User not found!');
    }

    return data[0];
  },
);
