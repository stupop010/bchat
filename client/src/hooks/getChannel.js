import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChannel } from '../redux/actions/projects';

export default function getChannel(id) {
  const dispatch = useDispatch();
  const channel = useSelector(state => state.projects.channel);
  useEffect(() => {
    dispatch(fetchChannel(id));
  }, [id]);
  return channel;
}
