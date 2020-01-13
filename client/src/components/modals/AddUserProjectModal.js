import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import { addUserToProject } from '../../store/actions/projects';

const AddUserProjectModal = ({ open, onClose, project }) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addUserToProject(email, project.id));
    setEmail('');
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="add-user-modal"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle
        id="add-user-modal"
        style={{ borderBottom: '1px solid #666' }}
      >
        Add user to <strong>{project.name}</strong>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={onSubmit}>
          <TextField
            autoFocus
            margin="dense"
            id="users"
            label="Add User"
            type="text"
            value={email}
            fullWidth
            placeholder="i.g. name@example.com"
            onChange={e => setEmail(e.target.value)}
          />

          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button type="submit">Add User</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

AddUserProjectModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default AddUserProjectModal;
