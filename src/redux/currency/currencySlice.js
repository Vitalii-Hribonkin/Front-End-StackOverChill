import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export default currencySlice.reducer;
