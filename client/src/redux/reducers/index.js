import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import projects from './projects';
import channel from './channel';

export default combineReducers({
  auth,
  user,
  projects,
  channel,
});
