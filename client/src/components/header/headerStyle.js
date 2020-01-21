import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    background: 'rgb(110, 15, 7)',
  },
  title: {
    flex: '1',
  },
  linkPadding: {
    padding: '1rem',
  },
  flex: {
    display: 'flex',
    padding: 0,
    margin: 0,
  },
}));

export default useStyles;
