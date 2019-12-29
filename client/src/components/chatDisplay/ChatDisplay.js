import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import io from 'socket.io-client';
import { Display } from './chatDisplayStyle';
import ChatNav from './ChatNav';
import getChannel from '../../hooks/getChannel';

const endPoint = 'http://localhost:5000';
const socket = io.connect(endPoint, { reconnect: true });

const ChatDisplay = () => {
  const { id } = useParams();
  const channel = getChannel(id);
  const [message, setMessage] = useState('');

  if (!channel) return null;

  const connectToChannel = () => {
    socket.on('connect', () => {
      console.log('connect');
      console.log(channel);
    });
  };

  const diconnectChannel = () => {
    socket.on('disconnect', () => {
      console.log('disconnected');
    });
  };

  useEffect(() => {
    diconnectChannel();
    connectToChannel();
  }, [id]);

  const sendMessage = e => {
    e.preventDefault();
    // socket.emit('message', { message });
    setMessage('');
  };

  return (
    <Display component="section">
      <ChatNav channel={channel} />
      <h1>{channel.name}</h1>
      <div>Messages:</div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Send Message</button>
      </form>
    </Display>
  );
};

export default ChatDisplay;
