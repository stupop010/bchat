import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/header/Header';
import heroPic from '../assets/images/hero.jpg';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    overflow: 'auto',
  },
  pic: {
    height: '500px',
    width: '700px',
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header />
      <Box className={classes.heroPic}>
        <img src={heroPic} alt="People chatting" className={classes.pic} />
      </Box>
    </Box>
  );
};

export default LandingPage;
