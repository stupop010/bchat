import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, TextInput, SignForm } from './authStyle';
import { signIn } from '../../redux/actions/authActions';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    const data = { username, email, password };
    dispatch(signIn(data));
  };

  const onUsernameChange = ({ target }) => {
    setUsername(target.value);
  };

  const onEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  return (
    <SignForm>
      <Form noValidate autoComplete="off" onSubmit={submit}>
        <TextInput
          value={username}
          label="Username"
          onChange={onUsernameChange}
          type="text"
        />
        <TextInput
          tpye="email"
          value={email}
          label="Email"
          onChange={onEmailChange}
        />
        <TextInput
          value={password}
          label="Password"
          type="password"
          onChange={onPasswordChange}
        />
        <button type="submit">submit</button>
      </Form>
    </SignForm>
  );
};

export default RegisterForm;
