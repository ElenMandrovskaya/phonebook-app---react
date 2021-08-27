import { createSlice } from "@reduxjs/toolkit";
import * as contactOperations from './contacts-operations'

const initialState = {
    items: [],
    filters: ""
}

const contactsSlice = createSlice ({
    name: 'contacts',
    initialState,
    reducers: {
        filterContact(state, action) {
            state.filter = action.payload;
        }
    },
    extraReducers: {
        [contactOperations.getContacts.fulfilled](state, action) {
            state.items = action.payload
        },
        [contactOperations.addContact.fulfilled](state, action) {
            state.items.push(action.payload)
        },
        [contactOperations.removeContact.fulfilled](state, action) {
            state.items = state.items.filter(({ id }) => id !== action.payload);
        },

    }
})

export default contactsSlice.reducer;
// export const { filterContact } = contactsSlice.actions;
