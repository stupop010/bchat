import { FETCH_USER, AUTH_ERROR } from '../actionTypes';

const initialState = {
  displayName: '',
  email: '',
  name: '',
  isAuth: false,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_USER:
      return {
        ...state,
        ...payload,
        isAuth: true,
      };
    case AUTH_ERROR: {
      return {
        displayName: '',
        email: '',
        name: '',
        isAuth: false,
      };
    }
    default:
      return state;
  }
}
