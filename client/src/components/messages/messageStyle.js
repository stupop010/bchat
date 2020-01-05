import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

export const MessageContent = styled(CardContent)`
  padding: 0.4rem !important;
`;

export const MessageCard = styled(Card)`
  margin: 0.2rem 0;
  width: 43%;
  margin-left: 0.8rem;
  background: rgb(227, 227, 227) !important;
  overflow: visible;
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
