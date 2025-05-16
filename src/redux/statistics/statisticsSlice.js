import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export default statisticsSlice.reducer;
