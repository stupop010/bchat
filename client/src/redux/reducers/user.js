import { FETCH_USER } from '../actionTypes';

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
    default:
      return state;
  }
}
