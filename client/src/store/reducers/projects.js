import {
  CREATE_PROJECT,
  FETCH_PROJECTS,
  CREATE_CHANNEL,
  ONLINE_IN_CHANNEL,
  DELETE_CHANNEL,
} from '../actionTypes';

const initialState = {
  projects: [],
  onlineInChannel: {},
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_PROJECT:
      return {
        ...state,
        projects: payload,
      };
    case FETCH_PROJECTS:
    case CREATE_CHANNEL:
    case DELETE_CHANNEL:
      return {
        ...state,
        projects: payload,
      };
    // case FETCH_CHANNEL:
    //   return {
    //     ...state,
    //     channel: payload.channel[0],
    //     messages: payload.messages,
    //   };
    // case CREATE_CHANNEL:
    //   return {
    //     ...state,
    //     projects: state.projects.map(project =>
    //       project.id === payload[0].id ? payload[0] : project,
    //     ),
    //   };
    // case CREATE_MESSAGE:
    //   return {
    //     ...state,
    //     messages: [...state.messages, payload.message],
    //   };
    case ONLINE_IN_CHANNEL:
      return {
        ...state,
        onlineInChannel: payload,
      };
    default:
      return state;
  }
}
