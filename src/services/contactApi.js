// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//     reducerPath: 'contactsApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://connections-api.herokuapp.com',
//     }),
//     endpoints: builder => ({
//         fetchContacts: builder.query({
//             query: ( ) => `/contacts`,
//         }),
//         addContact: builder.mutation({
//             query(body) {
//                 return {
//                     url: 'contacts',
//                     method: 'POST',
//                     body,
//                 }
//             }
//         }),
//         removeContact: builder.mutation({
//             query(id) {
//                 return {
//                     url: `contacts/${id}`,
//                     method: 'DELETE',
//                 }
//             }
//         }),
//     }),
// })

// export const { useFetchContactsQuery, useAddContactMutation, useRemoveContactMutation } = contactsApi;