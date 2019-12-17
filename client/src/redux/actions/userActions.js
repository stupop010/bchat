/* eslint-disable */
import axios from 'axios';
import { FETCH_USER, REFRESH_TOKEN } from '../actionTypes';
import { setAccessTokenHeader } from '../../utils';

export const fetchUser = () => async dispatch => {
  const accessToken = JSON.parse(localStorage.getItem('access_token'));
  const refreshToken = JSON.parse(localStorage.getItem('refresh_token'));

  if (accessToken === null || refreshToken === null) {
    return undefined;
  }

  try {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    const res = await axios.get('/api/user/profile');

    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    // Will refresh token when the access token expired and user
    axios.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
    const res = await axios.post('/api/token/refresh');

    setAccessTokenHeader(res.data.access_token);
    dispatch({ type: REFRESH_TOKEN, payload: res.data });
  }
};

/* eslint-enable */
