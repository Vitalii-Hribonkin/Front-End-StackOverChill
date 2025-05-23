import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { api, clearAuthHeader, setAuthHeader } from "../../services/api";

export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, thunkAPI) => {
    try {
      await api.post("/auth/register", { name, email, password });
      const { data } = await api.post("/auth/login", { email, password });
      setAuthHeader(data.data.accessToken);
      return data.data.accessToken;
    } catch (e) {
      toast.error(
        "Register failed. You may already have an account with this email. Сheck the entered data, please."
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post("/auth/login", credentials);
      setAuthHeader(data.data.accessToken);
      return data.data.accessToken;
    } catch (e) {
      toast.error("Login failed. Сheck the entered data, please.");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await api.post("/auth/logout");
    clearAuthHeader();
  } catch (e) {
    toast.error("Logout failed");
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("No token found");
    }

    try {
      setAuthHeader(persistedToken);
      const response = await api.get("/users"); // твій ендпоінт
      return response.data;
    } catch (e) {
      clearAuthHeader(); // просто чистимо хедер
      return thunkAPI.rejectWithValue(e.response?.data?.message || e.message);
    }
  }
);
