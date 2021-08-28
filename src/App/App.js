import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { lazy, Suspense } from 'react';
import { Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Main } from './App.styled';
import { AppBar } from '../components/AppBar/AppBar';
import { HomePage } from '../pages/Home';
import { LoginPage } from '../pages/Login';
import { RegistrationPage } from '../pages/Registrations';
import { ContactsPage } from '../pages/Contacts';
import * as authOperations from '../redux/auth/auth-operaions';
import PrivateRoute from '../routers/PrivateRouter';
import PublicRoute from '../routers/PublicRouter';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />
      <Main>
        <Switch>

          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted redirectedTo="/contacts">
            <RegistrationPage />
          </PublicRoute>

          <PublicRoute exact path="/login" restricted redirectedTo="/contacts">
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectedTo="/login">
            <ContactsPage />
          </PrivateRoute>

        </Switch>
      </Main>
      <ToastContainer />
      </>
  )
}



