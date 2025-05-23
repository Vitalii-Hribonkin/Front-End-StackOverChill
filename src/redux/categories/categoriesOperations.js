import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

export const fetchCategories = createAsyncThunk(
  'categories',
  async (isIncome, thunkAPI) => {
    try {
      const {data} = await api.get(
        `/categories/${isIncome ? 'income' : 'expense'}`,
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
