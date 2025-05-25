import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';
import toast from 'react-hot-toast';
import { getUser } from '../user/userOperations';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/transactions');
      return data.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const createTransaction = createAsyncThunk(
  'transactions/create',
  async ({ transactionData, category }, thunkAPI) => {
    try {
      const { data } = await api.post('/transactions', transactionData);
      return {
        transaction: data.data.transaction,
        balance: data.data.balance,
        category,
      };
    } catch (error) {
      toast.error('Addind new transaction failed');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const editTransaction = createAsyncThunk(
  'transactions/edit',
  async ({ _id, ...transactionData }, thunkAPI) => {
    try {
      const { data } = await api.patch(`transactions/${_id}`, transactionData);
      return data.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteTransaction = createAsyncThunk(
  'transactions/delete',
  async (transactionId, thunkAPI) => {
    try {
      const { data } = await api.delete(`/transactions/${transactionId}`);
      return { transactionId, balance: data.data };
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
