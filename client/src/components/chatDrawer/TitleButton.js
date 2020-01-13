import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import useStyles from './chatDrawerStyle';

const TitleButton = ({ setDrawerOpen }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.titleButton}>
      <Typography>About this Channel</Typography>
      <Tooltip title="Close">
        <CloseIcon
          className={classes.cross}
          onClick={() => setDrawerOpen(false)}
        />
      </Tooltip>
    </Paper>
  );
};

TitleButton.propTypes = {
  setDrawerOpen: PropTypes.func.isRequired,
};

export default TitleButton;
