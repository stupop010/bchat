import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    overflow: 'auto',
    background: 'rgb(245, 245, 245)',
  },
  pic: {
    height: '500px',
    width: '700px',
  },
  heroContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    padding: '2rem',
  },
  heroInfo: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  infoContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    columnGap: '2rem',
    padding: '2rem',
  },
  card: {
    padding: '1rem',
  },
  title: {
    fontSize: '4.8rem',
  },
  mt1: {
    marginTop: '1rem',
  },
}));

export default useStyles;
