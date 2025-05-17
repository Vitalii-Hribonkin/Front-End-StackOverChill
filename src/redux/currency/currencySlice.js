import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './currencyOperations';

const initialState = {
  data: [],
  time: null,
  error: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    resetCurrency(state, action) {
      state.data = [];
      state.time = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.time = action.payload.time;
        state.error = null;
      })
      .addCase(fetchCurrency.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { resetCurrency } = currencySlice.actions;

export default currencySlice.reducer;
