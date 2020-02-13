/* eslint-disable */
import axios from 'axios';
import {
  SIGN_IN,
  REGISTER_USER,
  LOGOUT,
  LOGIN_ERROR,
  REGISTER_ERROR,
} from '../actionTypes';

export const registerUser = (data, history) => async dispatch => {
  try {
    const res = await axios.post('/api/register', data);
    dispatch({ type: REGISTER_USER, payload: res.data });
    history.push('/dashboard');
  } catch (err) {
    const error = err.response.data.errors[0];
    dispatch({ type: REGISTER_ERROR, payload: error });
    console.log(err);
  }
};

export const signIn = (data, history) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/login', data);
    dispatch({ type: SIGN_IN, payload: res.data });
    history.push('/dashboard');
  } catch (err) {
    const error = err.response.data.errors[0];
    dispatch({ type: LOGIN_ERROR, payload: error });
    console.error(err);
  }
};

export const logOut = history => dispatch => {
  dispatch({ type: LOGOUT });
  history.push('/');
};

/* eslint-enable */
