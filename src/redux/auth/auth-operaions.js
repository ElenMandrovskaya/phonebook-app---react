import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    }
    catch (error) {
        alert('error');
    }
});

export const login = createAsyncThunk('auth/logim', async credentials => {
    try {
        const { data } = await axios.post('users/login', credentials);
        token.set(data.token);
        return data;
    }
    catch (error) {
        alert('error');
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        token.unset();
    }
    catch (error) {
        alert('error');
    }
});

export const getCurrentUser = createAsyncThunk('auth/current', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
        const { data } = await axios.get('users/current');
        return data;
    }
    catch (error) {
        // alert('error');
    }
});