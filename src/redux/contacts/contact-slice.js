import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice ({
    name: 'contacts',
    initialState: {
        items: [],
        filters: ""
    },
    reducers: {
        fetchContact(state, action) {
            return action.payload },
        addContact(state, action) {
            return [action.payload, ...state] },
        removeContact(state, action) {
            const contacts = state.filter(item => item.id !== action.payload);
            return contacts},
        filterContact(state, action) {
            return action.payload }
    }
})

export default contactsSlice.reducer;