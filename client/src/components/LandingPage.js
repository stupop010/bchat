import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <ul>
        <Link to="/login" style={{ padding: '1em' }}>
          login
        </Link>
        <Link to="/register" style={{ padding: '1em' }}>
          register
        </Link>
      </ul>
      Landing page
    </div>
  );
};

export default LandingPage;
