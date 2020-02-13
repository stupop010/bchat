import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  warning: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2rem',
    width: '20rem',
    border: '1px solid red',
    borderRadius: '10px',
    margin: '1rem auto',
    '& h3': {
      fontSize: '1rem',
      color: 'red',
    },
  },
}));

export default useStyles;
