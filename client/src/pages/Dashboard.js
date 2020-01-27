/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Menu from '../components/menu/Menu';

import ChatPage from '../components/chatPage/ChatPage';

// eslint-disable-next-line react/prop-types
const Dashboard = () => {
  const { path } = useRouteMatch();
  const user = useSelector(state => state.user);

  return (
    <MainDashboard>
      <Menu user={user} />
      <ChatDisplayContainer>
        <Switch>
          <Route exact path={path}>
            <div>ck</div>
          </Route>
          <Route path={`${path}/:projectName/:name/:id`}>
            <ChatPage user={user} />
          </Route>
        </Switch>
      </ChatDisplayContainer>
    </MainDashboard>
  );
};

const MainDashboard = styled.section`
  display: grid;
  grid-template-columns: 220px auto;
  width: 100%;
  height: 100vh;
`;

const ChatDisplayContainer = styled.div`
  overflow: hidden;
`;

export default Dashboard;
