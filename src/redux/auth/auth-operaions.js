import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.warning('You have successfully registered')
        return data;
    }
    catch (error) {
        toast.warning('Such an account already exists')
    }
});

export const login = createAsyncThunk('auth/logim', async credentials => {
    try {
        const { data } = await axios.post('users/login', credentials);
        token.set(data.token);
        toast.warning('you are logged into your account')
        return data;
    }
    catch (error) {
        toast.warning('Something went wrong! Verify your the credentials')
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        token.unset();
        toast.warning('you are logged out of your account')
    }
    catch (error) {
        toast.warning('Something went wrong!')
    }
});

export const getCurrentUser = createAsyncThunk('auth/current', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    // console.log(persistedToken)

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
        const { data } = await axios.get('users/current');
        return data;
    }
    catch (error) {
        toast.warning('Could not identify you')
    }
});