import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { editChannel } from '../../store/actions/projectsAction';

const EditChannel = ({ open, onClose, channel }) => {
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const clearData = () => {
    setDescription('');
    setName('');
  };

  const submit = e => {
    e.preventDefault();
    onClose();
    const data = { description, name, id: channel.id };
    dispatch(editChannel(data));
    clearData();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="edit-channel-dialog-title"
    >
      <DialogTitle id="edit-channel-dialog-title">
        Edit Channel Details.
      </DialogTitle>
      <form onSubmit={submit}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="Name"
            label="Name"
            type="text"
            value={name}
            fullWidth
            placeholder={channel.name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="Description"
            label="Description"
            type="text"
            value={description}
            fullWidth
            placeholder={channel.description}
            onChange={e => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Edit Channel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

EditChannel.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  channel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default EditChannel;
