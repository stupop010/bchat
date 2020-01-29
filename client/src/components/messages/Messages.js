import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

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

  useEffect(() => {
    if (userId !== message.userId) setOtherUser(true);
  }, []);

  const date = moment(message.createdAt).calendar();
  const msg = message.message.replace(/\u21B5/g, '<br/>');

  return (
    <MessageCard key={message.id} className={otherUser ? classes.right : null}>
      <Tooltip title="Add" aria-label="add">
        <MessageContent>
          <MessageTitle color="textSecondary">
            {message.userName} <span>{date}</span>
          </MessageTitle>
          <Message component="div">{msg}</Message>
        </MessageContent>
      </Tooltip>
    </MessageCard>
  );
};

Messages.propTypes = {
  message: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    channelId: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  userId: PropTypes.number.isRequired,
};
export default Messages;
