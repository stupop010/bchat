/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from './Header';
import Menu from './menu/Menu';
import ChatDisplay from './chatDisplay/ChatDisplay';

// eslint-disable-next-line react/prop-types
const Dashboard = props => {
  const { path } = useRouteMatch();

  console.log(props);
  const user = useSelector(state => state.user);

  return (
    <MainDashboard>
      <Menu user={user} />
      <div>
        <Header />
        <Switch>
          <Route exact path={path}>
            <div>ck</div>
          </Route>
          <Route path={`${path}/:name/:id`}>
            <ChatDisplay />
          </Route>
        </Switch>
      </div>
    </MainDashboard>
  );
};

const MainDashboard = styled.main`
  display: flex;
`;

export default Dashboard;
