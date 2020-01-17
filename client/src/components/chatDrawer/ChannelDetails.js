/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import EditChannel from '../modals/EditChannelModal';
import { deleteChannel } from '../../store/actions/projectsAction';
import useStyles from './chatDrawerStyle';

const ChannelDetails = () => {
  const classes = useStyles();
  const channel = useSelector(state => state.projects.channel);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const onDeleteChannel = id => {
    console.log('click');
    deleteChannel(id);
  };

  const EditButton = () => (
    <button
      className={classes.resetButton}
      type="button"
      onClick={() => setOpen(true)}
    >
      Edit
    </button>
  );

  return (
    <>
      <ExpansionPanelDetails className={classes.flexColumn}>
        <Box className={classes.channelInfo}>
          <Tooltip interactive placement="right" title={<EditButton />}>
            <span>Name</span>
          </Tooltip>
          <Typography>#{channel.name}</Typography>
        </Box>

        <Box className={classes.channelInfo}>
          <Typography>
            <Tooltip interactive placement="right" title={<EditButton />}>
              <span>Description</span>
            </Tooltip>
          </Typography>
          <Typography>{channel.description}</Typography>
        </Box>

        <Box className={classes.channelInfo}>
          <Typography>
            <span>Created</span>
          </Typography>
          <Typography>{channel.createdAt}</Typography>
        </Box>

        <Button
          type="button"
          color="secondary"
          variant="contained"
          className={classes.deleteButton}
          startIcon={<DeleteIcon />}
          onClick={onDeleteChannel}
        >
          Delete Channel
        </Button>
      </ExpansionPanelDetails>
      <EditChannel open={open} onClose={handleClose} channel={channel} />
    </>
  );
};

export default ChannelDetails;
