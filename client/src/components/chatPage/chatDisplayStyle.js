import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const Display = styled(Box)`
  background: rbg(245, 245, 245);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChatMessage = styled(Box)`
  background: grey;
`;

export const MessageList = styled(List)`
  display: flex;
  flex-direction: column;
`;

export const MessagesContainer = styled(Box)`
  overflow-y: auto;
  z-index: 1;
  flex-grow: 2;
`;

export const Nav = styled.nav`
  z-index: 2;
`;

export const NavPaper = styled(Paper)`
  border-radius: 0 !important;
  padding: 0.7rem 0 0 0.6rem;
`;
