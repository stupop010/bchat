/* eslint-disable */
import axios from 'axios';
import { FETCH_USER } from '../actionTypes';
import setAuthHeader from '../../utils/setAuthHeader';

export const fetchUser = () => async dispatch => {
  // if (localStorage.access_token) {
  //   setAuthHeader(localStorage.access_token);
  // }

  try {
    // const refeshToken = await axios.post('/api/token/refresh');
    // const res = await axios.get('/user/profile');
    // console.log(refeshToken);
    // dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

/* eslint-enable */
