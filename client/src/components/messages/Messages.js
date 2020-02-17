import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Box, Tooltip, Typography, CardContent } from '@material-ui/core';

import Messagetooltip from './MessageTooltip';
import EditMessage from './EditMessage';
import {
  editMessage,
  createPinnedMessage,
} from '../../store/actions/projectsAction';

import { MessageCard, MessageTitle, useStyles } from './messageStyle';

const Messages = ({ message, userId, channelId, channelUUID }) => {
  const classes = useStyles();
  const [otherUser, setOtherUser] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (userId !== message.userId) setOtherUser(true);
  }, []);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const sendEditMessage = editMsg => {
    editMessage(editMsg, message.id, channelId, channelUUID);
  };

  const pinMessage = () => {
    createPinnedMessage(message.id, channelId, channelUUID);
  };

  const date = moment(message.createdAt).calendar();
  const msg = message.message.replace(/\u21B5/g, '<br/>');

  const IfEditMode = () => {
    if (editMode && !otherUser)
      return (
        <EditMessage
          message={msg}
          toggleEditMode={toggleEditMode}
          sendEditMessage={sendEditMessage}
        />
      );
    return <Box className={classes.message}>{msg}</Box>;
  };

  const IfEdited = () => {
    if (message.createdAt !== message.updatedAt) {
      return (
        <Box className={classes.updatedAt}>
          <Typography>
            Updated last {moment(message.updatedAt).calendar()}
          </Typography>
        </Box>
      );
    }
    return null;
  };

  return (
    <MessageCard key={message.id} className={otherUser ? classes.right : null}>
      <CardContent className={classes.content}>
        <Tooltip
          title={
            <Messagetooltip
              toggleEditMode={toggleEditMode}
              pinMessage={pinMessage}
            />
          }
          interactive
          placement="right-start"
        >
          <Box>
            <MessageTitle color="textSecondary">
              {message.userName} <span>{date}</span>
            </MessageTitle>
            <IfEditMode />
            <IfEdited />
          </Box>
        </Tooltip>
      </CardContent>
    </MessageCard>
  );
};

Messages.propTypes = {
  message: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }).isRequired,
  userId: PropTypes.number.isRequired,
  channelId: PropTypes.number.isRequired,
  channelUUID: PropTypes.string.isRequired,
};

export default Messages;
