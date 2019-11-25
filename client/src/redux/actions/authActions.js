/* eslint-disable */
import axios from 'axios';
import { SIGNIN } from '../actionTypes';

export const signIn = data => async dispatch => {
  const res = await axios.post('api/registration', data);
  console.log(res);
  //   dispatch({ type: SIGNIN });
  console.log(data);
};

export const logOut = () => {
  console.log('logout');
};
/* eslint-enable */
