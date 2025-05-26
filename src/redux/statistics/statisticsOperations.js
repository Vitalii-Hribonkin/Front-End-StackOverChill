import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";
import toast from "react-hot-toast";

export const getStatistics = createAsyncThunk(
  "getStatistics",
  async (period, thunkAPI) => {
    try {
      const { data } = await api.get(`/summary/${period}`);
      return data.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
