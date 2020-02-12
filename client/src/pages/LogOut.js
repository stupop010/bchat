import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logOut } from '../store/actions/authActions';

const LogOut = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(logOut(history));
  }, []);

  return null;
};

export default LogOut;
