import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';

import useChannelFetching from '../../hooks/fetchingData';
import ChatDisplay from './ChatDisplay';

const ChatPage = ({ user }) => {
  const { id } = useParams();

  // Fetching the channel Details
  const channel = useChannelFetching(id);
  if (isEmpty(channel)) return null;
  console.log(channel);
  // const isAdmin = channel.users[0].channel_members.isAdmin;
  return <ChatDisplay channel={channel} user={user} />;
};

ChatPage.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default ChatPage;
