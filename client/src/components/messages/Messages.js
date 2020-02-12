import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Messagetooltip from './MessageTooltip';
import EditMessage from './EditMessage';
import { editMessage } from '../../utils/socket';

import {
  MessageContent,
  MessageCard,
  MessageTitle,
  Message,
} from './messageStyle';

const useStyles = makeStyles(() => ({
  right: {
    alignSelf: 'flex-end',
    direction: 'rtl',
  },
}));

const Messages = ({ message, userId }) => {
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
    editMessage(editMsg, message.id);
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
    return <Message component="div">{msg}</Message>;
  };

  return (
    <MessageCard key={message.id} className={otherUser ? classes.right : null}>
      <MessageContent>
        <Tooltip
          title={<Messagetooltip toggleEditMode={toggleEditMode} />}
          interactive
          placement="right-start"
        >
          <Box>
            <MessageTitle color="textSecondary">
              {message.userName} <span>{date}</span>
            </MessageTitle>
            <IfEditMode />
          </Box>
        </Tooltip>
      </MessageContent>
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
  }).isRequired,
  userId: PropTypes.number.isRequired,
};

export default Messages;
