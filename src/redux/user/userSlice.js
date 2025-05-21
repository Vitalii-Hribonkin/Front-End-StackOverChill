import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: () => initialState,
  },
  extraReducers: (builder) => {},
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
