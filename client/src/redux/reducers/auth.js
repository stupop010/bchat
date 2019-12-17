import { SIGN_IN, REGISTER_USER, REFRESH_TOKEN } from '../actionTypes';

const initialState = {
  access_token: JSON.parse(localStorage.getItem('access_token')),
  refresh_token: JSON.parse(localStorage.getItem('refresh_token')),
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
    case REFRESH_TOKEN:
      return {
        ...state,
        access_token: payload.access_token,
        isAuth: true,
      };
    default:
      return state;
  }
}
