import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import AllPins from './components/Pins';
import PinDetailPage from './components/SinglePins';
import CreateNewPin from './components/CreatePinForm';
import {getAllUsers} from './store/user'
import Footer from './components/Footer';
import UnauthorizedPage from './components/404Page';
import HomePage from './components/HomePage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getAllUsers())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route> */}
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <AllPins />
        </ProtectedRoute>
        <ProtectedRoute path='/pins/:pinId' exact={true} >
          <PinDetailPage />
        </ProtectedRoute>
        <ProtectedRoute path="/create-pin-form" exact={true}>
          <CreateNewPin />      
        </ProtectedRoute>
        <Route path="/home" exact={true}>
          < HomePage />
        </Route>
        <Route>
          <UnauthorizedPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
