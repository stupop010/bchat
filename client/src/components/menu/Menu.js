import React from 'react';
import PropTypes from 'prop-types';
import { MenuAside, UserTitle } from './menuStyles';
import Projects from './Projects';

const Menu = ({ user }) => {
  if (!user) return null;

  return (
    <MenuAside component="aside">
      <UserTitle>{user.displayName || user.name}</UserTitle>
      <Projects />
    </MenuAside>
  );
};

Menu.defaultProps = {
  user: {
    displayName: '',
    name: '',
  },
};

Menu.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default Menu;
