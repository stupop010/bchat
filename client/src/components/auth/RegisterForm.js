import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';

import useStyles from './authStyle';
import Form from './Form';
import { registerUser } from '../../store/actions/authActions';

const RegisterForm = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const submit = e => {
    e.preventDefault();
    const data = { name, email, password };
    dispatch(registerUser(data, history));
  };

  const cancelButton = () => {
    history.push('/');
  };

  const onNameChange = ({ target }) => {
    setName(target.value);
  };

  const onEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  return (
    <Form submit={submit} cancelButton={cancelButton} title="register">
      <TextField
        className={classes.input}
        value={name}
        label="Full Name"
        onChange={onNameChange}
        type="text"
      />
      <TextField
        className={classes.input}
        type="email"
        value={email}
        label="Email"
        onChange={onEmailChange}
      />
      <TextField
        className={classes.input}
        value={password}
        label="Password"
        type="password"
        onChange={onPasswordChange}
      />
    </Form>
  );
};

export default RegisterForm;
