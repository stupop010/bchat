import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      style={{
        height: '10vh',
        background: 'white',
        color: 'black',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <nav>
        <ul>
          <Link to="/" style={{ padding: '1em' }}>
            home
          </Link>
          <Link to="/login" style={{ padding: '1em' }}>
            login
          </Link>
          <Link to="/register" style={{ padding: '1em' }}>
            register
          </Link>
          <Link to="/create_project" style={{ padding: '1em' }}>
            Create a Project
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
