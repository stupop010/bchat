import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './footerStyle';

const Footer = () => {
  const classes = useStyles();
  return (
    <Box component="footer" className={classes.footer}>
      <Typography>© {new Date().getFullYear()}, Stuart Doney</Typography>
    </Box>
  );
};

export default Footer;
