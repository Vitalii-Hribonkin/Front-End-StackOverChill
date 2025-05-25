import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: builder => { },
});

export default transactionsSlice.reducer;
