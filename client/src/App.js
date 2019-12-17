import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import socketIOClient from 'socket.io-client';
import styled from 'styled-components';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import './app.css';

import { fetchUser } from './redux/actions/userActions';

const App = () => {
  // useEffect(() => {
  //   const socket = socketIOClient('http://127.0.0.1:5000/');
  //   socket.on('connect', () => {
  //     socket.emit('joined', 'room1');
  //   });
  // }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <Router>
      <Main>
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
      </Main>
    </Router>
  );
};

const Main = styled.main`
  height: 100vh;
  display: flex;
`;

export default App;
