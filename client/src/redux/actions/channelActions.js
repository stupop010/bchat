/* eslint-disable */
import axios from 'axios';

export const createChannel = data => async dispatch => {
  try {
    const res = await axios.post('/api/channel', data);
    dispatch({ type: CREATE_CHANNEL, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

/* eslint-enable */
