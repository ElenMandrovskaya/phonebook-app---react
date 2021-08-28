import { useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Main } from './App.styled';
import { AppBar } from '../components/AppBar/AppBar';
import Spinner from '../components/Spinner/Spinner';
import * as authOperations from '../redux/auth/auth-operaions';

import PrivateRoute from '../routers/PrivateRouter';
import PublicRoute from '../routers/PublicRouter';

const HomePage = lazy(() => import('../pages/Home'));
const RegistrationPage = lazy(() => import('../pages/Registrations'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />
      <Main>
        <Suspense fallback={<Spinner/>}>
        <Switch>

          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted redirectedTo="/">
            <RegistrationPage />
          </PublicRoute>

          <PublicRoute exact path="/login" restricted redirectedTo="/contacts">
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectedTo="/login">
            <ContactsPage />
          </PrivateRoute>

          </Switch>
          </Suspense>
      </Main>
      <ToastContainer />
      </>
  )
}



