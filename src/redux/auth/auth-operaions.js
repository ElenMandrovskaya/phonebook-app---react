import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        return data;
    }
    catch (error) {
        alert('error');
    }
});

export const login = createAsyncThunk('auth/logim', async credentials => {
    try {
        const { data } = await axios.post('users/login', credentials);
        return data;
    }
    catch (error) {
        alert('error');
    }
});

export const logout = createAsyncThunk('auth/logout', async credentials => {
    try {
        const { data } = await axios.post('users/logout', credentials);
        return data;
    }
    catch (error) {
        alert('error');
    }
});

export const carrentUser = createAsyncThunk('auth/carrent', async credentials => {
    try {
        const { data } = await axios.get('users/carrent', credentials);
        return data;
    }
    catch (error) {
        alert('error');
    }
});