import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
  },
  heading: {
    fontSize: '1.2rem',
  },
  titleButton: {
    background: 'rgb(230, 230, 230)',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 0.8rem',
    '& p': {
      fontWeight: 700,
      fontSize: '1.2rem',
    },
  },
  channelInfo: {
    padding: '0.3rem 0',
    '& p': {
      padding: '0.3rem 0',
      fontSize: '0.9rem',
    },
    '& :nth-child(1)': {
      opacity: 0.7,
      fontSize: '0.8',
    },
  },
  cross: {
    '& :hover': {
      cursor: 'pointer',
    },
  },
  flexColumn: {
    flexDirection: 'column',
  },
  mr3: {
    marginRight: '0.3rem',
  },
  resetButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '0.7rem',
    color: 'white',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:focus': {
      outline: 0,
    },
  },
  deleteButton: {
    marginTop: '1rem',
  },
}));

export default useStyles;
