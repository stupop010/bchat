import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Add from '@material-ui/icons/Add';
import ChannelList from './ChannelList';
import { CreateChannel, ProjectName, HoverSpan } from './menuStyles';

const ProjectItem = ({ project, toggleChannelModal, toggleAddUserModal }) => {
  if (!project.channels) return null;
  const [openChannel, setOpenChannel] = useState(false);

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
          {/* Add User */}
          <CreateChannel onClick={() => toggleAddUserModal(project)}>
            <h3>Add User</h3>
            <HoverSpan>
              <PersonAddIcon />
            </HoverSpan>
          </CreateChannel>

          {/* Create Channel */}
          <CreateChannel onClick={() => toggleChannelModal(project)}>
            <h3>Create a channel</h3>
            <HoverSpan>
              <Add />
            </HoverSpan>
          </CreateChannel>

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
  }).isRequired,
  toggleChannelModal: PropTypes.func.isRequired,
  toggleAddUserModal: PropTypes.func.isRequired,
};

export default ProjectItem;
