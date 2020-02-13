/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Menu from '../components/menu/Menu';

import ChatPage from '../components/chatPage/ChatPage';
import { joinProject, onFetchProjectData } from '../utils/socket';
import { fetchUser } from '../store/actions/userActions';

// eslint-disable-next-line react/prop-types
const Dashboard = () => {
  const { path } = useRouteMatch();
  const user = useSelector(state => state.user);
  const projects = useSelector(state => state.projects.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    // join rooms in socket with projects
    projects.map(project => joinProject(project));
  }, [projects]);

  useEffect(() => {
    dispatch(fetchUser());
    // listen to changes in projects rooms
    onFetchProjectData(dispatch);
  }, []);

  return (
    <MainDashboard>
      <Menu user={user} />
      <ChatDisplayContainer>
        <Switch>
          <Route exact path={path}>
            <div>ck</div>
          </Route>
          <Route path={`${path}/:projectName/:name/:uuid`}>
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
