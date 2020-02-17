import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './messageStyle';

const EditMessage = ({ message, toggleEditMode, sendEditMessage }) => {
  const [editMessage, setEditMessage] = useState('');
  const classes = useStyles();

  useEffect(() => {
    setEditMessage(message);
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    sendEditMessage(editMessage);
    toggleEditMode();
  };

  return (
    <Box className={classes.editContainer}>
      <form onSubmit={onSubmit}>
        <TextField
          fullWidth
          multiline
          size="small"
          variant="outlined"
          value={editMessage}
          onChange={e => setEditMessage(e.target.value)}
        />
        <Box className={classes.editButtons}>
          <Button className={classes.primaryButton} type="submit">
            Edit
          </Button>
          <Button
            className={classes.cancelButton}
            type="button"
            onClick={() => toggleEditMode()}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

EditMessage.propTypes = {
  message: PropTypes.string.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  sendEditMessage: PropTypes.func.isRequired,
};

export default EditMessage;
