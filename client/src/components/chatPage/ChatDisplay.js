/* eslint-disable react/prop-types */
import React, { useEffect, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Display, MessageList, MessagesContainer } from './chatDisplayStyle';
import ChatNav from './ChatNav';
import Messages from '../messages/Messages';

import {
  disconnectSocket,
  joinChannel,
  newMessage,
  sendSocketMessage,
} from '../../utils/socket';
import MessageBox from '../messageBox/MessageBox';

const ChatDisplay = ({ channel, user }) => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.projects.messages);
  const messagesEndRef = createRef(null);

  useEffect(() => {
    // Socket Functions
    joinChannel(channel);
    newMessage(dispatch);
    return () => {
      disconnectSocket(channel.id);
    };
  }, [channel.id]);

  const sendMessage = data => {
    sendSocketMessage(data, channel.id, user.id, user.name);
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(scrollBottom, [channel.id]);
  useEffect(scrollToBottom, [messages]);

  return (
    <Display component="section">
      <ChatNav channel={channel} />
      <MessagesContainer>
        <MessageList>
          {messages.map(message => (
            <Messages message={message} userId={user.id} />
          ))}
        </MessageList>
        <div ref={messagesEndRef} />
      </MessagesContainer>
      <MessageBox sendMessage={sendMessage} />
    </Display>
  );
};

export default ChatDisplay;
