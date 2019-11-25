import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { SignForm, Form, TextInput } from './authStyle';

const LoginForm = () => {
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
