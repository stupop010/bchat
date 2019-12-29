import {
  CREATE_PROJECT,
  FETCH_PROJECTS,
  CREATE_CHANNEL,
  FETCH_CHANNEL,
} from '../actionTypes';

const initialState = {
  projects: [],
  channel: {},
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
        channel: payload[0],
      };
    default:
      return state;
  }
}
