import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';

import PinnedMessage from './PinnedMessage';
import useStyles from './chatDrawerStyle';

const PinnedMessagesContainer = () => {
  const classes = useStyles();
  const pinnedMessages = useSelector(state => state.channel.pinnedMessages);

  return (
    <Box className={classes.pinned}>
      {pinnedMessages.map(msg => (
        <PinnedMessage message={msg} />
      ))}
    </Box>
  );
};

export default PinnedMessagesContainer;
