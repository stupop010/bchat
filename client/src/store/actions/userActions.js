/* eslint-disable */
import axios from 'axios';
import { FETCH_USER, LOGIN_ERROR } from '../actionTypes';

export const fetchUser = () => async dispatch => {
  const accessToken = JSON.parse(localStorage.getItem('token'));

  if (accessToken === null) undefined;

  try {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    const res = await axios.get('/api/auth');
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    dispatch({ type: LOGIN_ERROR });
  }
};

/* eslint-enable */
