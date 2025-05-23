import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';
import toast from 'react-hot-toast';

export const getUser = createAsyncThunk('getUser', async (_, thunkAPI) => {
  try {
    const { data } = await api.get('/user');
    return data;
  } catch (error) {
    toast.error(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});
