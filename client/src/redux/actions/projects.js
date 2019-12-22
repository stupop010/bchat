/* eslint-disable */
import axios from 'axios';
import { setAccessTokenHeader } from '../../utils';
import { CREATE_PROJECT, FETCH_PROJECTS, CREATE_CHANNEL } from '../actionTypes';

export const createProject = data => async dispatch => {
  try {
    const res = await axios.post('/api/project', data);
    dispatch({ type: CREATE_PROJECT, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const createChannel = data => async dispatch => {
  try {
    const res = await axios.post('/api/channel', data);
    dispatch({ type: CREATE_CHANNEL, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const fetchProjects = () => async dispatch => {
  try {
    const token = JSON.parse(localStorage.getItem('token'));
    setAccessTokenHeader(token);
    const res = await axios.get('/api/project');
    dispatch({ type: FETCH_PROJECTS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
/* eslint-enable */
