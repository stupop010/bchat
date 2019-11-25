import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const SignForm = styled.div`
  height: calc(100% - 265px);
`;

export const Form = styled.form`
  padding: 4em;
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled(TextField)`
  margin: 2em !important;
`;
