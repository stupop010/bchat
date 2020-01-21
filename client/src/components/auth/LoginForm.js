import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';

import { SignForm, Form, TextInput } from './authStyle';
import { signIn } from '../../store/actions/authActions';

const LoginForm = ({ isAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    const data = { email, password };
    dispatch(signIn(data));
  };

  console.log(isAuth);

  // if (isAuth) return <Redirect to="/dashboard" />;

  useEffect(() => {
    console.log('im chaned');
  }, [isAuth]);

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

LoginForm.propTypes = {
  isAuth: Proptypes.bool.isRequired,
};

export default LoginForm;
