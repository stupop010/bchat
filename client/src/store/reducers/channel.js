import { FETCH_CHANNEL, CREATE_MESSAGE } from '../actionTypes';

const initialState = {
  channel: {},
  isAdmin: false,
  messages: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_CHANNEL:
      return {
        ...state,
        channel: payload.channel[0],
        messages: payload.messages,
        isAdmin: payload.channel[0].users[0].channel_members.admin,
      };
    case CREATE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload.message],
      };
    default:
      return state;
  }
}
