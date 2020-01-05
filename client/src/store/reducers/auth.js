import { SIGN_IN, REGISTER_USER, REFRESH_TOKEN } from '../actionTypes';

const initialState = {
  token: JSON.parse(localStorage.getItem('token')),
  refreshToken: JSON.parse(localStorage.getItem('refreshToken')),
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
        accessToken: payload.accessToken,
        isAuth: true,
      };
    default:
      return state;
  }
}
