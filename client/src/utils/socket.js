/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import io from 'socket.io-client';
import {
  CREATE_MESSAGE,
  // ONLINE_IN_CHANNEL,
  SOCKET_FETCH_PROJECT,
  FETCH_MESSAGES,
} from '../store/actionTypes';

const ENDPOINT = 'http://localhost:5000';
export const socket = io.connect(ENDPOINT, { reconnect: true });

export const joinProject = project => {
  socket.emit('join_project', { project }, data => {
    console.log(data);
  });
};

export const fetchProjectData = projectId => {
  socket.emit('fetch_project_data', { projectId });
};

export const onFetchProjectData = dispatch => {
  socket.on('send_project_data', data => {
    dispatch({ type: SOCKET_FETCH_PROJECT, payload: data.projects });
  });
};

export const joinChannel = channel => {
  socket.emit('join', { channel }, data => {
    console.log(data);
  });
};

export const newMessage = dispatch => {
  socket.on('newMessage', data => {
    dispatch({ type: CREATE_MESSAGE, payload: data });
  });
};

export const sendSocketMessage = (
  message,
  channelUUID,
  userId,
  userName,
  channelId,
) => {
  socket.emit('message', { message, channelUUID, userId, userName, channelId });
};

export const fetchMessages = (channelId, channelUUID) => {
  socket.emit('fetch_messages', { channelId, channelUUID }, data => {
    console.log(data);
  });
};

export const fetchedMessages = dispatch => {
  socket.on('fetched_messages', data => {
    dispatch({ type: FETCH_MESSAGES, payload: data });
    console.log(data);
    console.log('hello');
  });
};

export const socketFetchPinnedMessages = (channelId, channelUUID, dispatch) => {
  console.log('hello');
};

export const disconnectSocket = () => {
  socket.emit('disconnect');
  socket.off();
};

// export const onlineInChannel = dispatch => {
//   socket.on('onlineInChannel', data => {
//     console.log(data);
//     dispatch({ type: ONLINE_IN_CHANNEL, payload: data.online });
//   });
// };
