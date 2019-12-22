/* eslint-disable */
import axios from 'axios';
import { SIGN_IN, REGISTER_USER } from '../actionTypes';

export const registerUser = data => async dispatch => {
  try {
    const res = await axios.post('/api/register', data);
    dispatch({ type: REGISTER_USER, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const signIn = data => async dispatch => {
  try {
    const res = await axios.post('/api/auth/login', data);
    console.log(res);
    dispatch({ type: SIGN_IN, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const logOut = () => {
  console.log('logout');
};

/* eslint-enable */
