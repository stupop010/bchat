import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export const Display = styled(Box)`
  background: rgb(245, 245, 245);
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 4rem auto 6rem;
  grid-template-columns: 2fr;
`;

export const ChatMessage = styled(Box)`
  background: grey;
`;

export const MessageList = styled(List)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const MessagesContainer = styled(Box)`
  overflow-y: scroll;
  grid-area: messages;
`;

export const Nav = styled.nav`
  height: 100%;
  grid-area: nav;
  z-index: 3;
`;

export const NavPaper = styled(Paper)`
  border-radius: 0 !important;
  padding: 0.7rem 0 0 0.6rem;
`;

export const ProjectName = styled(Typography)`
  font-size: 1.6rem !important;
  font-weight: 600 !important;
`;

export const NavList = styled(Box)`
  display: flex;
  opacity: 0.7;
  h4 {
    font-size: 1.2rem;
    margin-right: 1rem;
    font-weight: 400;
  }
  span {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ChannelDescription = styled(Typography)`
  max-width: 20rem;
  font-size: 0.7rem !important;
  max-height: 1rem;
  overflow: hidden;
  word-wrap: break-word;
  padding: 0.2rem;
  border: 1px solid white;
  &:hover {
    max-height: 5rem;
    border: 1px solid #666;
    border-radius: 4px;
  }
`;

export const useStyles = makeStyles(() => ({
  defaultGridTemplate: {
    gridTemplateAreas: `
    'nav nav nav nav'
    'messages messages messages messages'
    'messageBox messageBox messageBox messageBox'`,
  },
  sideOpenGrid: {
    gridTemplateAreas: `
    'nav nav nav nav'
    'messages messages messages drawer'
    'messageBox messageBox messageBox drawer'`,
  },
  drawer: {
    width: '20rem',
    gridArea: 'drawer',
    display: 'block !important',
    border: '1px solid rgba(209, 209, 209, 0.7)',
  },
  displayNone: {
    display: 'none',
  },
}));
