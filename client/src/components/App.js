import React, { useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import RegisterForm from './auth/RegisterForm';

const App = () => {
  useEffect(() => {
    const socket = socketIOClient('http://127.0.0.1:5000/');
    socket.on('connect', () => {
      console.log('hello');
      socket.emit('joined', 'room1');
    });
    console.log(socket);
  }, []);

  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default App;
