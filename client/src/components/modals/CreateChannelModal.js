import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { createChannel } from '../../redux/actions/projects';
import { PrivateBox, ContentBox, Text } from './modalStyles';

const CreateProjectModal = ({ open, onClose, project }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [privateChannel, setPrivateChannel] = useState(false);
  const dispatch = useDispatch();

  const clearData = () => {
    setDescription('');
    setName('');
    setPrivateChannel(false);
  };

  const handleChange = () => {
    setPrivateChannel(!privateChannel);
  };

  const submit = e => {
    e.preventDefault();
    onClose();
    const data = {
      name,
      description,
      private: privateChannel,
      projectId: project.id,
    };
    dispatch(createChannel(data));
    clearData();
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        Create A {privateChannel ? 'Private' : null} Channel for {project.name}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Channels are where your team communicates. They’re best when organised
          around a topic – #marketing, for example.
        </DialogContentText>
        <form onSubmit={submit}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Channel Name"
            type="text"
            value={name}
            fullWidth
            placeholder=" # i.g. marketing"
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

          <PrivateBox>
            <Typography variant="h6">Make it Private</Typography>
            <ContentBox>
              <Text>
                {privateChannel
                  ? 'This can’t be undone. A private channel cannot be made public later on.'
                  : 'When a channel is set to private, it can only be viewed or joined by invitation.'}
              </Text>

              <FormControlLabel
                control={
                  <Switch
                    checked={privateChannel}
                    onChange={handleChange}
                    value="set to private"
                  />
                }
              />
            </ContentBox>
          </PrivateBox>

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
  project: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default CreateProjectModal;
