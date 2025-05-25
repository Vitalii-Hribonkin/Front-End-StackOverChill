import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './categoriesOperations';

const initialState = {
  items: [],
  error: null,
  isIncome: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setIsIncome(state, action) {
      state.isIncome = action.payload;
    },
    toggleIsIncome(state) {
      state.isIncome = !state.isIncome;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.items = action.payload.data;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setIsIncome, toggleIsIncome } = categoriesSlice.actions;

export default categoriesSlice.reducer;
