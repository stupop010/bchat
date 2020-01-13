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
  cross: {
    '& :hover': {
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
