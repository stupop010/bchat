import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { SignForm, Form, TextInput } from './authStyle';
import { signIn } from '../../redux/actions/authActions';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    const data = { email, password };
    dispatch(signIn(data));
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

export default LoginForm;
