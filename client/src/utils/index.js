/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const setAccessTokenHeader = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};
