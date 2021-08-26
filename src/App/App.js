
// import { lazy, Suspense } from 'react';
// import { Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Main } from './App.styled';
import { AppBar } from '../components/AppBar/AppBar';
import { HomePage } from '../pages/Home';
import { LoginPage } from '../pages/Login';
import { RegistrationPage } from '../pages/Registrations';
import { ContactsPage } from '../pages/Contacts';

export default function App() {

  return (
    <>
      <AppBar />
      <Main>
        <HomePage />
        <LoginPage />
        <RegistrationPage />
        <ContactsPage />
      </Main>
      <ToastContainer />
      </>
  )
}



