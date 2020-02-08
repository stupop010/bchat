/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChannel } from '../store/actions/projectsAction';

const useChannelFetching = uuid => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChannel(uuid));
  }, [uuid]);

  const channel = useSelector(state => state.channel.channel);
  return channel;
};

export default useChannelFetching;
