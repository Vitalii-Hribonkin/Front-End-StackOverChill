import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

export const getUser = createAsyncThunk('getUser', async (_, thunkAPI) => {
  try {
    const { data } = await api.get('/user');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
