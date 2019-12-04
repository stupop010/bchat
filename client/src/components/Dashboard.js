import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from './Header';
import Menu from './menu/Menu';

const Dashboard = () => {
  const [message, setMessage] = useState('');

  const sendMessgae = e => {
    e.preventDefault();
    console.log(message);
  };

  const user = useSelector(state => state.user);

  return (
    <MainDashboard>
      <Menu user={user} />
      <div>
        <Header />
        <div>Messages:</div>
        <div>
          <form onSubmit={e => sendMessgae(e)}>
            <input type="text" onChange={e => setMessage(e.target.value)} />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </MainDashboard>
  );
};

const MainDashboard = styled.main`
  display: flex;
`;

export default Dashboard;
