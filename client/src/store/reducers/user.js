import { FETCH_USER, REFRESH_TOKEN } from '../actionTypes';

const initialState = {
  displayName: '',
  email: '',
  name: '',
  isLoading: false,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_USER:
      return {
        ...state,
        ...payload,
      };
    case REFRESH_TOKEN:
      return {
        ...state,
        ...payload.user,
      };
    default:
      return state;
  }
}
