import {
  CREATE_PROJECT,
  FETCH_PROJECTS,
  CREATE_CHANNEL,
  FETCH_CHANNEL,
  CREATE_MESSAGE,
} from '../actionTypes';

const initialState = {
  projects: [],
  channel: {},
  messages: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_PROJECT:
      console.log(payload);
      return {
        ...state,
        projects: [...state.projects, payload],
      };
    case FETCH_PROJECTS:
      return {
        ...state,
        projects: payload,
      };
    case CREATE_CHANNEL:
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id === payload[0].id ? payload[0] : project,
        ),
      };
    case FETCH_CHANNEL:
      return {
        ...state,
        channel: payload.channel[0],
        messages: payload.messages,
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
