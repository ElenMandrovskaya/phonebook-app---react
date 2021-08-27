import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from "./contacts/contacts-reducer";
import authReducer from './auth/auth-slice'
// import contactsReducer from "./contacts/contact-slice";
// import { contactsApi } from "../services/contactApi";


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: rootReducer
        // contacts: contactReducer
        // [contactsApi.reducerPath]: contactsApi.reducer,
        
    },
    middleware,
    devtools: process.env.NODE_ENV !== 'production'
})
export const persistor = persistStore(store);