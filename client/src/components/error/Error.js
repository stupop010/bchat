import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';

import useStyles from './errorStyles';

const Error = ({ error }) => {
  const classes = useStyles();
  return (
    <Box className={classes.warning}>
      <Typography variant="h3">{error}</Typography>
    </Box>
  );
};

Error.propTypes = {
  error: PropTypes.string,
};

Error.defaultProps = {
  error: '',
};

export default Error;
