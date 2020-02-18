import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Typography, Box } from '@material-ui/core';

import useStyles from './chatDrawerStyle';

const PinnedMessage = ({ message }) => {
  console.log(message);
  const classes = useStyles();
  const date = moment(message.createdAt).calendar();
  const msg = message.message.replace(/\u21B5/g, '<br/>');
  return (
    <Box className={classes.pinnedContent}>
      <Typography>{msg}</Typography>
      <Typography>
        {message.userName} {date}
      </Typography>
    </Box>
  );
};

PinnedMessage.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string,
    createdAt: PropTypes.string,
    userName: PropTypes.string,
  }).isRequired,
};
export default PinnedMessage;
