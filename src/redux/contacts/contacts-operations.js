import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const fetchContacts = createAsyncThunk('contacts/getcontacts', async () => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    }
    catch (error) {
        toast.error("You don't have any contacts saved yet");
    }
});

export const addContact = createAsyncThunk('contacts/addcontact', async contact => {
    try {
        const { data } = await axios.post('/contacts', contact);
        return data;
    }
    catch (error) {
        toast.error("Failed to add a contact");
    }
});

export const removeContact = createAsyncThunk('contacts/removecontact', async id => {
    try {
        await axios.delete(`/contacts/${id}`);
        return id;
    }
    catch (error) {
        toast.error("Failed to delete a contact");
    }
});
