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
    console.log(res);
    dispatch({ type: CREATE_CHANNEL, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const fetchProjects = () => async dispatch => {
  const token = JSON.parse(localStorage.getItem('access_token'));
  setAccessTokenHeader(token);
  const res = await axios.get('/api/project');
  console.log(res);
  dispatch({ type: FETCH_PROJECTS, payload: res.data.projects });
};
/* eslint-enable */
