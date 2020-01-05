import axios from 'axios';

export const setAccessTokenHeader = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

export const hello = token => {
  console.log(token);
};