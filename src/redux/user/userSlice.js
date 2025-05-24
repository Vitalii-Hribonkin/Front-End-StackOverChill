import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './userOperations';

const initialState = {
  userInfo: {
    name: '',
    email: '',
    balance: 0,
  },
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.userInfo.name = action.payload.name;
        state.userInfo.email = action.payload.email;
        state.userInfo.balance = action.payload.balance;
        state.isLoading = false;
      })
      .addCase(getUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
