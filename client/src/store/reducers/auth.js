import {
  SIGN_IN,
  REGISTER_USER,
  AUTH_ERROR,
  LOGOUT,
  IS_AUTH,
  LOGIN_ERROR,
  REGISTER_ERROR,
} from '../actionTypes';

const initialState = {
  token: JSON.parse(localStorage.getItem('token')),
  isAuth: false,
  error: '',
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case REGISTER_USER:
    case SIGN_IN:
      return {
        ...state,
        ...payload,
        isAuth: true,
        error: '',
      };
    case IS_AUTH:
      return {
        ...state,
        isAuth: true,
        error: '',
      };
    case LOGOUT:
      return {
        token: null,
        isAuth: false,
        error: '',
      };
    case AUTH_ERROR:
      return {
        token: null,
        isAuth: false,
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        error: payload.msg,
      };
    default:
      return state;
  }
}
