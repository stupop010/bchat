import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from './headerStyle';

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h3" className={classes.title}>
          B-Chat
        </Typography>
        <ul className={classes.flex}>
          <Link to="/login" className={classes.linkPadding}>
            <Typography>Login</Typography>
          </Link>
          <Link to="/register" className={classes.linkPadding}>
            <Typography>Register</Typography>
          </Link>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
