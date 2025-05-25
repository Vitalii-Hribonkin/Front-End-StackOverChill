import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";
import toast from "react-hot-toast";
import { getUser } from "../user/userOperations";

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/transactions");
      return data.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createTransaction = createAsyncThunk(
  "transactions/create",
  async (transactionData, thunkAPI) => {
    try {
      const { data } = await api.post("/transactions", transactionData);
      thunkAPI.dispatch(getUser());
      return data.data.transaction; 
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "transactions/delete",
  async (transactionId, thunkAPI) => {
    try {
      await api.delete(`/transactions/${transactionId}`);
      thunkAPI.dispatch(getUser());
      return { transactionId }; 
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
