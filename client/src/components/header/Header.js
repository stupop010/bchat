import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    background: 'rgb(110, 15, 7)',
  },
  title: {
    flex: '1',
  },
  linkPadding: {
    padding: '1rem',
  },
  flex: {
    display: 'flex',
    padding: 0,
    margin: 0,
  },
}));

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
