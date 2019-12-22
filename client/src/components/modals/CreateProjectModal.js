import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { createProject } from '../../redux/actions/projects';

const CreateProjectModal = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const clearData = () => {
    setDescription('');
    setName('');
  };

  const submit = e => {
    e.preventDefault();
    onClose();
    const data = { name, description };
    dispatch(createProject(data));
    clearData();
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Create A Project</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Create a project. Where you can create multiple channels for your
          team.
        </DialogContentText>
        <form onSubmit={submit}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project Name"
            type="text"
            value={name}
            fullWidth
            onChange={e => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description (optional)"
            type="text"
            value={description}
            fullWidth
            onChange={e => setDescription(e.target.value)}
          />
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Create
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

CreateProjectModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CreateProjectModal;
