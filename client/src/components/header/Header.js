import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from './headerStyle';

const Header = ({ isAuth }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h3" className={classes.title}>
          B-Chat
        </Typography>
        <ul className={classes.flex}>
          {!isAuth && (
            <>
              <Link to="/login" className={classes.linkPadding}>
                <Typography>Login</Typography>
              </Link>
              <Link to="/register" className={classes.linkPadding}>
                <Typography>Register</Typography>
              </Link>
            </>
          )}
          {isAuth && (
            <>
              <Link to="/dashboard" className={classes.linkPadding}>
                <Typography>Dashboard</Typography>
              </Link>
              <Link to="/logout" className={classes.linkPadding}>
                <Typography>Logout</Typography>
              </Link>
            </>
          )}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  isAuth: PropTypes.bool,
};

Header.defaultProps = {
  isAuth: false,
};

export default Header;
