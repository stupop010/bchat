/* eslint-disable */
import axios from 'axios';
import { setAccessTokenHeader } from '../../utils';
import {
  CREATE_PROJECT,
  FETCH_PROJECTS,
  CREATE_CHANNEL,
  FETCH_CHANNEL,
  EDIT_CHANNEL,
  DELETE_CHANNEL,
} from '../actionTypes';

// Project Actions
export const createProject = data => async dispatch => {
  try {
    const res = await axios.post('/api/project', data);
    dispatch({ type: CREATE_PROJECT, payload: res.data[0] });
  } catch (err) {
    console.error(err);
  }
};

export const fetchProjects = () => async dispatch => {
  try {
    const token = JSON.parse(localStorage.getItem('token'));
    setAccessTokenHeader(token);
    const res = await axios.get('/api/project');
    dispatch({ type: FETCH_PROJECTS, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const addUserToProject = (email, projectId) => async dispatch => {
  try {
    const res = await axios.post('/api/project/addUser', { email, projectId });
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

// Channel Actions
export const createChannel = data => async dispatch => {
  try {
    const res = await axios.post('/api/channel', data);
    dispatch({ type: CREATE_CHANNEL, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const fetchChannel = id => async dispatch => {
  try {
    const res = await axios.get('/api/channel', { params: { id } });
    dispatch({ type: FETCH_CHANNEL, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const editChannel = data => async dispatch => {
  try {
    const res = await axios.patch('/api/channel', data);
    dispatch({ type: EDIT_CHANNEL, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const deleteChannel = data => async dispatch => {
  try {
    const res = await axios.delete('/api/channel', { params: { data } });
    dispatch({ type: DELETE_CHANNEL, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

// Message Actions

// Star Actions
export const addStarred = id => async dispatch => {
  try {
    console.log(id);
    const res = await axios.post('/api/channel/starred', { id });
  } catch (err) {
    console.error(err);
  }
};

export const RemoveStarred = id => async dispatch => {
  try {
    console.log(id);
  } catch (err) {
    console.error(err);
  }
};

/* eslint-enable */
