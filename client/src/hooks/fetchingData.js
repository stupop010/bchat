/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChannel } from '../store/actions/projects';

export const useChannelFetching = id => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChannel(id));
  }, [id]);

  const channel = useSelector(state => state.projects.channel);

  return channel;
};

export const fetch = socket => {};
