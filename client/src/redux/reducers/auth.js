import { SIGN_IN, REGISTER_USER } from '../actionTypes';

const initialState = {
  access_token: localStorage.getItem('access_token'),
  // refresh_token: localStorage.getItem('refresh_token'),
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
    default:
      return state;
  }
}
