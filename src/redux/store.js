import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./contacts/contacts-reducer";
// import contactsReducer from "./contacts/contact-slice";
// import { contactsApi } from "../services/contactApi";

const store = configureStore({
    reducer: {
        contacts: rootReducer
        // contacts: contactReducer
        // [contactsApi.reducerPath]: contactsApi.reducer,
        
    },
    devtools: process.env.NODE_ENV !== 'production'
})
export default store;