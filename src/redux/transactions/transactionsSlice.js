import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTransactions,
  createTransaction,
  editTransaction,
  deleteTransaction,
} from "./transactionsOperations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createTransaction.pending, (state) => {
        state.isLoading = true;
        
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [({... action.payload.transaction, category: action.payload.category }), ...state.items];
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editTransaction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.map((item) =>
          item._id === action.payload.transaction._id
            ? action.payload.transaction
            : item,
        );
      })
      .addCase(editTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTransaction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (item) => item._id !== action.payload.transactionId,
        );
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default transactionsSlice.reducer;
