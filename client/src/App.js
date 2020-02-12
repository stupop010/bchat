import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PrivateRoute from './components/PrivateRoute';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';
import LogOut from './pages/LogOut';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import './app.css';

import { fetchUser } from './store/actions/userActions';
import { disconnectSocket } from './utils/socket';

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isAuth);

  useEffect(() => {
    dispatch(fetchUser());

    return () => {
      console.log('disconnet socket');
      disconnectSocket();
    };
  }, [isAuth]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/register">
          <RegisterForm />
        </Route>
        <Route exact path="/logout">
          <LogOut />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
