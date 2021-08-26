
// import { lazy, Suspense } from 'react';
// import { Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Main } from './App.styled';
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import { Title } from "../components/Title/Title";
import { AppBar } from '../components/AppBar/AppBar';
import { UserMenu } from '../components/UserMenu/UserMenu';
import { HomePage } from '../pages/Home';
import { LoginPage } from '../pages/Login';
import { RegistrationPage } from '../pages/Registrations';

export default function App() {

  return (
    <>
      <AppBar />
      <Main>
        <HomePage />
        <LoginPage />
        <RegistrationPage />
          <Title title={"Add contact"} />
          <ContactForm/>


          <Title title="Search contact" />
          <Filter />


          <Title title="Contacts"/>
          <ContactList />

        <UserMenu />
      </Main>
      <ToastContainer />
      </>
  )
}



