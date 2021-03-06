import {
  FETCH_CHANNEL,
  CREATE_MESSAGE,
  FETCH_MESSAGES,
  FETCH_PINNED_MESSAGES,
} from '../actionTypes';

const initialState = {
  channel: {},
  isAdmin: false,
  messages: [],
  pinnedMessages: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_CHANNEL:
      return {
        ...state,
        channel: payload.channel,
        messages: payload.messages,
        isAdmin: payload.channel.channel_members.admin,
      };
    case CREATE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload.message],
      };
    case FETCH_MESSAGES:
      return {
        ...state,
        messages: payload.messages,
      };
    case FETCH_PINNED_MESSAGES:
      return {
        ...state,
        pinnedMessages: payload.messages,
      };
    default:
      return state;
  }
}
