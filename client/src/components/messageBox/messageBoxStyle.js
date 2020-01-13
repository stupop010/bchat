import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

export const Form = styled.form`
  width: 100%;
`;

export const MessageInput = styled(TextField)`
  width: 100%;
  .MuiOutlinedInput-notchedOutline {
    border-color: rgba(105, 104, 104, 0.8);
  }
  p > span:nth-child(2) {
    margin-left: 2em;
  }
`;

export const MessageContainer = styled(Container)`
  background-color: white;
  min-height: 5.5rem;
  grid-area: messageBox;
`;

export const BoldSpan = styled.span`
  font-weight: bold;
`;
