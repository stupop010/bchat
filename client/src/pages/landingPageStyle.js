import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    overflow: 'auto',
    background: 'rgb(245, 245, 245)',
  },
  pic: {
    width: '100%',
  },
  heroContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    columnGap: '2rem',
    padding: '2rem',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      textAlign: 'center',
    },
  },
  heroInfo: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: '1rem',
  },
  infoContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    columnGap: '2rem',
    padding: '2rem',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2,1fr)',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
  card: {
    padding: '1rem',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
  mt1: {
    marginTop: '1rem',
  },
}));

export default useStyles;
