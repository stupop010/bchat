import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button } from '@material-ui/core';
import useStyles from './authStyle';
import Error from '../error/Error';

const Form = ({ children, submit, cancelButton, title, error }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="h1">{title}</Typography>
      {error && <Error error={error} />}
      <form className={classes.form} autoComplete="off" onSubmit={submit}>
        {children}
        <Box className={classes.authButtons}>
          <Button className={classes.primaryBtn} type="submit">
            Submit
          </Button>
          <Button
            type="button"
            className={classes.secondaryBtn}
            onClick={cancelButton}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.func.isRequired,
  cancelButton: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  error: PropTypes.string,
};

Form.defaultProps = {
  error: '',
};

export default Form;
