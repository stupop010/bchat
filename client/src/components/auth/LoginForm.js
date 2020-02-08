import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SignForm, Form, TextInput } from './authStyle';
import { signIn } from '../../store/actions/authActions';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const submit = e => {
    e.preventDefault();
    const data = { email, password };
    dispatch(signIn(data, history));
  };

  return (
    <SignForm>
      <Form autoComplete="off" onSubmit={submit}>
        <TextInput
          type="email"
          value={email}
          label="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <TextInput
          value={password}
          label="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </Form>
    </SignForm>
  );
};

export default LoginForm;
