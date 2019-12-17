import { CREATE_PROJECT, FETCH_PROJECTS, CREATE_CHANNEL } from '../actionTypes';

const initialState = {
  projects: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_PROJECT:
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
          project.id === payload.id ? payload : project,
        ),
      };
    default:
      return state;
  }
}
