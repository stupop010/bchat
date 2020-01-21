import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import './app.css';

import { fetchUser } from './store/actions/userActions';
import { disconnectSocket } from './utils/socket';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());

    return () => {
      disconnectSocket();
    };
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/register">
          <RegisterForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
