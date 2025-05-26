import { createSlice } from "@reduxjs/toolkit";
import { getStatistics } from "./statisticsOperations";

const initialState = {
  statisticsInfo: {
    expense: [],
    income: {},
    totalExpense: 0,
    totalIncome: 0,
  },
  isLoading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    clearStatistics: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.statisticsInfo = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getStatistics.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getStatistics.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearStatistics } = statisticsSlice.actions;
export default statisticsSlice.reducer;
