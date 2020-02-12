import {
  CREATE_PROJECT,
  FETCH_PROJECTS,
  CREATE_CHANNEL,
  ONLINE_IN_CHANNEL,
  SOCKET_FETCH_PROJECT,
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
      return {
        ...state,
        projects: payload,
      };
    case SOCKET_FETCH_PROJECT:
      return {
        ...state,
        projects: state.projects.map(project => {
          if (project.id === payload.id) {
            return { ...payload, project_members: project.project_members };
          }
          return project;
        }),
      };
    case ONLINE_IN_CHANNEL:
      return {
        ...state,
        onlineInChannel: payload,
      };
    default:
      return state;
  }
}
