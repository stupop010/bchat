import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Add from '@material-ui/icons/Add';
import ChannelList from './ChannelList';
import { ProjectName } from './menuStyles';

const useStyles = makeStyles(() => ({
  channelButton: {
    display: 'flex',
    margin: '8px 20px 0 20px',
    color: 'rgb(173, 173, 173)',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  heading: {
    flex: '1 1 auto',
    margin: 0,
    fontSize: '17px',
    fontWeight: 400,
  },
}));

const ProjectItem = ({ project, toggleChannelModal, toggleAddUserModal }) => {
  if (!project.channels) return null;

  const classes = useStyles();
  const [openChannel, setOpenChannel] = useState(false);
  const isAdmin = project.project_members.admin;

  const handleClick = () => {
    setOpenChannel(!openChannel);
  };

  const channelsList = project.channels.map(channel => {
    return (
      <ChannelList
        channel={channel}
        key={channel.id}
        projectName={project.name}
      />
    );
  });

  return (
    <>
      {/* The Project Name  */}
      <ProjectName button onClick={handleClick}>
        <ListItemText primary={project.name} />
        {openChannel ? <ExpandLess /> : <ExpandMore />}
      </ProjectName>

      {/* Channel List + Add user + Add channel */}
      <Collapse in={openChannel} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {isAdmin && (
            // Add User
            <>
              <Box
                className={classes.channelButton}
                onClick={() => toggleAddUserModal(project)}
              >
                <Typography variant="h3" className={classes.heading}>
                  Add User
                </Typography>
                <PersonAddIcon />
              </Box>
              {/* Create Channel */}
              <Box
                onClick={() => toggleChannelModal(project)}
                className={classes.channelButton}
              >
                <Typography variant="h3" className={classes.heading}>
                  Create a channel
                </Typography>
                <Add />
              </Box>
            </>
          )}

          {/* Display all channel */}
          {channelsList}
        </List>
      </Collapse>
    </>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    channels: PropTypes.arrayOf(PropTypes.object),
    project_members: PropTypes.object,
  }).isRequired,
  toggleChannelModal: PropTypes.func.isRequired,
  toggleAddUserModal: PropTypes.func.isRequired,
};

export default ProjectItem;
