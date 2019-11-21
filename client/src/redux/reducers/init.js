import { TEST } from '../actionTypes';

const initialState = {
  user: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST:
      console.log('recuders');
      return {};
    default:
      return state;
  }
}
