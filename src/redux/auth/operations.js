import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goitAPI = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const setAuthHeader = (token) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  goitAPI.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) =>
    goitAPI
      .post("/users/signup", credentials)
      .then(({ data }) => {
        setAuthHeader(data.token);
        return data;
      })
      .catch((error) => thunkAPI.rejectWithValue(error.message))
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) =>
    goitAPI
      .post("/users/login", credentials)
      .then(({ data }) => {
        setAuthHeader(data.token);
        return data;
      })
      .catch((error) => thunkAPI.rejectWithValue(error.message))
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) =>
  goitAPI
    .post("/users/logout")
    .then(() => clearAuthHeader())
    .catch((error) => thunkAPI.rejectWithValue(error.message))
);

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const storedToken = state.auth.token;
    if (!storedToken) return thunkAPI.rejectWithValue("User isn't logged in");

    setAuthHeader(storedToken);
    return goitAPI
      .get("/users/current")
      .then(({ data }) => data)
      .catch((error) => thunkAPI.rejectWithValue(error.message));
  }
);
