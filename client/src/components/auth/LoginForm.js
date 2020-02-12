import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';

import useStyles from './authStyle';
import Form from './Form';
import { signIn } from '../../store/actions/authActions';

const LoginForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const submit = e => {
    e.preventDefault();
    const data = { email, password };
    dispatch(signIn(data, history));
  };

  const cancelButton = () => {
    history.push('/');
  };

  return (
    <Form submit={submit} cancelButton={cancelButton} title="login">
      <TextField
        className={classes.input}
        type="email"
        value={email}
        label="Email"
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        className={classes.input}
        value={password}
        label="Password"
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
    </Form>
  );
};

export default LoginForm;
