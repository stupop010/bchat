/* eslint-disable import/prefer-default-export */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChannel } from '../store/actions/projectsAction';

export const useChannelFetching = uuid => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChannel(uuid));
  }, [uuid]);

  const channel = useSelector(state => state.channel.channel);
  return channel;
};
