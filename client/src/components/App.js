import React, { useEffect } from 'react';
import socketIOClient from 'socket.io-client';
// import axios from 'axios';

import MessageDisplay from './MessageDisplay';
import MessageForm from './MessageForm';

const App = () => {
  useEffect(() => {
    const socket = socketIOClient('http://127.0.0.1:5000/');
    socket.on('connect', () => {
      console.log('hello');
      socket.emit('joined', 'room1');
    });
    console.log(socket);
  });

  return (
    <div>
      <MessageDisplay />
      <MessageForm />
    </div>
  );
};

export default App;
