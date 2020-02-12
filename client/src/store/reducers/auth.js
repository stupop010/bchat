import {
  SIGN_IN,
  REGISTER_USER,
  LOGIN_ERROR,
  LOGOUT,
  IS_AUTH,
} from '../actionTypes';

const initialState = {
  token: JSON.parse(localStorage.getItem('token')),
  isAuth: false,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case REGISTER_USER:
    case SIGN_IN:
      return {
        ...state,
        ...payload,
        isAuth: true,
      };
    case IS_AUTH:
      return {
        ...state,
        isAuth: true,
      };
    case LOGOUT:
      return {
        token: null,
        isAuth: false,
      };
    case LOGIN_ERROR:
      return {
        token: null,
        isAuth: false,
      };

    default:
      return state;
  }
}
