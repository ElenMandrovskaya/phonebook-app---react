import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./contacts/contacts-reducer";
import contactReducer from "./contacts/contact-slice";

const store = configureStore({
    reducer: {
        // contacts: rootReducer
        contacts: contactReducer
    },
    devtools: process.env.NODE_ENV !== 'production'
})
export default store;