
// import { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/register">
            <RegistrationPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/contacts">
            <ContactsPage />
          </Route>

        </Switch>
      </Main>
      <ToastContainer />
      </>
  )
}



