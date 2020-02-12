import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

export const MessageContent = styled(CardContent)`
  padding: 0.4rem !important;
`;

export const MessageCard = styled(Card)`
  margin: 0.2rem 0.8rem;
  width: 43%;
  background: rgb(227, 227, 227) !important;
  overflow: visible !important;
`;

export const MessageTitle = styled(Typography)`
  opacity: 0.9;
  font-size: 0.8rem !important;
  span {
    font-size: 0.7rem;
    opacity: 0.7;
  }
`;

export const Message = styled(Typography)`
  font-size: 1rem !important;
  word-break: break-all;
  white-space: pre-wrap;
`;

export const useStyles = makeStyles(() => ({
  editContainer: {
    paddingTop: '0.5rem ',
  },
  editButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0.4rem',
  },
  primaryButton: {
    backgroundColor: 'rgb(40, 143, 67)',
    marginRight: '0.4rem',
    '&:hover': {
      background: 'rgb(25, 97, 44)',
      color: 'white',
    },
  },
  cancelButton: {
    background: 'rgb(179, 30, 30)',
    '&:hover': {
      background: 'rgb(120, 18, 18)',
      color: 'white',
    },
  },
}));
