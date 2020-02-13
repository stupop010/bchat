import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    border: '1px solid #666',
    padding: '2rem',
    width: '30rem',
    margin: '10rem auto',
    textAlign: 'center',
    '& h1': {
      fontSize: '2.5rem',
      fontWeight: 500,
      textTransform: 'capitalize',
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  input: {
    margin: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  authButtons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.5rem',
    '& button': {
      marginRight: '1.5rem',
      padding: '8px 6px',
      color: '#f6f6f6',
    },
    '& button:hover': {
      opacity: 0.8,
    },
  },
  primaryBtn: {
    backgroundColor: 'rgb(32, 148, 30) !important',
  },
  secondaryBtn: {
    backgroundColor: 'rgb(130, 23, 23) !important',
  },
}));

export default useStyles;
