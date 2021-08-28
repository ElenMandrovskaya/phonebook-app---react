import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
// import * as contactsActions from '../contacts/contacts-actions.js';
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('contacts/getcontacts', async () => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    }
    catch (error) {
        alert('error');
    }
});

export const addContact = createAsyncThunk('contacts/addcontact', async contact => {
    try {
        const { data } = await axios.post('/contacts', contact);
        return data;
    }
    catch (error) {
        alert('error');
    }
});

export const removeContact = createAsyncThunk('contacts/removecontact', async id => {
    try {
        await axios.delete(`/contacts/${id}`);
        return id;
    }
    catch (error) {
        alert('error');
    }
});

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactRequest());
//   try {
//       const { data } = await axios.get('/contacts');
//       dispatch(contactsActions.fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactError(error));
//   }
// };

// export const addContact = ({ id, name, number }) => dispatch => {
//     const contact = {
//     id,
//     name,
//     number,
//   };

//   dispatch(contactsActions.addContactRequest());

//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
//     .catch(error => dispatch(contactsActions.addContactError(error)));
// };

// export const removeContact = id => dispatch => {
//   dispatch(contactsActions.deleteContactRequest());
//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
//     .catch(error => dispatch(contactsActions.deleteContactError(error)));
// };