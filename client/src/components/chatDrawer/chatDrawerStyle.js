import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    background: 'white',
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
  pinned: {
    maxHeight: '45vh',
    overflow: 'scroll',
    width: '100%',
  },
  pinnedContent: {
    padding: '1rem',
    boxShadow:
      '-1px 0px 1px 0px rgba(0,0,0,0.2), 1px 1px 1px 0px rgba(0,0,0,0.14), 2px 0px 3px 0px rgba(0,0,0,0.12)',

    margin: '0.2rem',
    '& :last-child': {
      marginTop: '0.3rem',
      fontSize: '0.7rem',
      opacity: '0.5',
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
