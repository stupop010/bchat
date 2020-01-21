import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import heroPic from '../assets/images/hero.jpg';
import useStyles from './landingPageStyle';

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} component="main">
      <Header />
      <Box className={classes.heroContent} component="section">
        <Box className={classes.heroInfo}>
          <Typography variant="h1" className={classes.title}>
            Slack replaces email inside your company
          </Typography>
          <Typography className={classes.mt1}>
            Keep conversations organised in Slack, the smart alternative to
            email.
          </Typography>
        </Box>
        <img src={heroPic} alt="People chatting" className={classes.pic} />
      </Box>
      <Box component="section" className={classes.infoContent}>
        <Paper className={classes.card}>
          <Typography variant="h3">Section One</Typography>
          <Typography className={classes.mt1}>
            Nostrud fugiat in quis officia ut est. Nisi commodo ullamco ex anim
            aliquip aliqua occaecat nostrud labore velit nostrud. Aute aute ea
            velit cillum ad. Pariatur aliquip amet consequat adipisicing veniam
            aliqua ipsum mollit. Ex reprehenderit voluptate pariatur ut nulla
            proident ea ad.
          </Typography>
        </Paper>
        <Paper className={classes.card}>
          <Typography variant="h3">Section Two</Typography>
          <Typography className={classes.mt1}>
            Officia elit aliqua do incididunt anim laborum qui dolor sit id id
            velit Lorem ad. Veniam in id nulla laborum nisi anim dolore
            consectetur eiusmod deserunt enim proident commodo excepteur. Ut non
            do pariatur esse tempor ea incididunt sit aliqua amet commodo Lorem
            ea dolor.
          </Typography>
        </Paper>
        <Paper className={classes.card}>
          <Typography variant="h3">Section Two</Typography>
          <Typography className={classes.mt1}>
            Veniam et occaecat et incididunt duis adipisicing sunt Lorem minim
            eiusmod exercitation sunt consequat. Nisi sint Lorem incididunt
            deserunt nostrud ipsum occaecat enim. Consectetur laborum tempor
            occaecat pariatur eiusmod commodo deserunt consequat aliqua nulla ex
            est dolor deserunt.
          </Typography>
        </Paper>
      </Box>
      <Footer />
    </Box>
  );
};

export default LandingPage;
