import { createSlice } from "@reduxjs/toolkit";
import * as contactOperations from './contacts-operations'

const initialState = {
    items: [],
    filter: ""
}

const contactsSlice = createSlice ({
    name: 'contacts',
    initialState,
    reducers: {
        filterContacts(state, action) {
            state.filter = action.payload;
        }
    },
    extraReducers: {
        [contactOperations.fetchContacts.fulfilled](state, action) {
            state.items = action.payload
        },
        [contactOperations.addContact.fulfilled](state, action) {
            state.items.push(action.payload)
            // state.items = [...state.items, action.payload];  
        },
        [contactOperations.removeContact.fulfilled](state, action) {
            state.items = state.items.filter(({ id }) => id !== action.payload);
        },

    }
})

export default contactsSlice.reducer;
export const { filterContacts } = contactsSlice.actions;
