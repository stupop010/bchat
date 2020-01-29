import io from 'socket.io-client';
import { CREATE_MESSAGE, ONLINE_IN_CHANNEL } from '../store/actionTypes';

const ENDPOINT = 'http://localhost:5000';
export const socket = io.connect(ENDPOINT, { reconnect: true });
export const isOpen = ws => console.log(ws);

export const joinProject = project => {
  socket.emit('join_project', { project }, data => {
    console.log(data);
  });
};

export const fetchProjectData = projectId => {
  socket.emit('fetch_project_data', { projectId });
};

export const test = () => {
  socket.on('send_project_data', data => {
    console.log(data);
  });
};

export const joinChannel = channel => {
  socket.emit('join', { channel }, data => {
    console.log(data);
  });
};

export const newMessage = dispatch => {
  socket.on('newMessage', data => {
    console.log(data);
    dispatch({ type: CREATE_MESSAGE, payload: data });
  });
};

export const sendSocketMessage = (message, channelId, userId, userName) => {
  socket.emit('message', { message, channelId, userId, userName });
};

export const disconnectSocket = () => {
  socket.emit('disconnect');
  socket.off();
};

export const onlineInChannel = dispatch => {
  socket.on('onlineInChannel', data => {
    console.log(data);
    dispatch({ type: ONLINE_IN_CHANNEL, payload: data.online });
  });
};
