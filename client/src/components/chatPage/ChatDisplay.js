/* eslint-disable react/prop-types */
import React, { useEffect, createRef, useState } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  Display,
  MessageList,
  MessagesContainer,
  useStyles,
} from './chatDisplayStyle';
import ChatNav from './ChatNav';
import Messages from '../messages/Messages';
import ChatDrawer from '../chatDrawer/ChatDrawer';
import { fetchPinnedMessage } from '../../store/actions/projectsAction';

import {
  joinChannel,
  newMessage,
  sendSocketMessage,
  // onlineInChannel,
} from '../../utils/socket';
import MessageBox from '../messageBox/MessageBox';

const ChatDisplay = ({ channel, user, isAdmin }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();
  const messages = useSelector(state => state.channel.messages);
  const messagesEndRef = createRef(null);

  useEffect(() => {
    newMessage(dispatch);
  }, []);

  useEffect(() => {
    // Socket Functions
    joinChannel(channel);
    dispatch(fetchPinnedMessage(channel.id));
    // onlineInChannel(dispatch);
  }, [channel.id]);

  const sendMessage = data => {
    sendSocketMessage(data, channel.uuid, user.id, user.name, channel.id);
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
    <Display
      component="section"
      className={clsx(classes.defaultGridTemplate, {
        [classes.sideOpenGrid]: drawerOpen,
      })}
    >
      <ChatNav
        channel={channel}
        setPanelOpen={setPanelOpen}
        setDrawerOpen={setDrawerOpen}
        drawerOpen={drawerOpen}
      />
      <MessagesContainer>
        <MessageList>
          {messages.map(message => (
            <Messages
              message={message}
              userId={user.id}
              key={message.id}
              channelId={channel.id}
              channelUUID={channel.uuid}
            />
          ))}
          <div ref={messagesEndRef} />
        </MessageList>
      </MessagesContainer>
      <div
        className={clsx(classes.displayNone, { [classes.drawer]: drawerOpen })}
      >
        <ChatDrawer
          panelOpen={panelOpen}
          setDrawerOpen={setDrawerOpen}
          isAdmin={isAdmin}
        />
      </div>
      <MessageBox sendMessage={sendMessage} />
    </Display>
  );
};

export default ChatDisplay;
