import { SIGNIN } from '../actionTypes';

const initialState = {
  user: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      console.log('recuders');
      return {};
    default:
      return state;
  }
}
