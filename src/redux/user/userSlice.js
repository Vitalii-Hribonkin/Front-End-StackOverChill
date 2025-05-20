import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './userOperations';

const initialState = {
  userInfo: {
    name: '',
    email: '',
    balance: 0,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userInfo.name = action.payload.name;
      state.userInfo.email = action.payload.email;
      state.userInfo.balance = action.payload.balance;
    });
  },
});

export default userSlice.reducer;
