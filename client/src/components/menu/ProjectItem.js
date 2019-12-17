import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Add from '@material-ui/icons/Add';
import ChannelList from './ChannelList';
import { CreateChannel, ProjectName, HoverSpan } from './menuStyles';

const ProjectItem = ({ project, toggleModal }) => {
  if (!project.channels) return null;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const channelsList = project.channels.map(channel => {
    return <ChannelList channel={channel} key={channel.id} />;
  });

  return (
    <>
      <ProjectName button onClick={handleClick}>
        <ListItemText primary={project.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ProjectName>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <CreateChannel
            component="div"
            m={1}
            onClick={() => toggleModal(project)}
          >
            <h3>Create a channel</h3>
            <HoverSpan>
              <Add />
            </HoverSpan>
          </CreateChannel>
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
  toggleModal: PropTypes.func.isRequired,
};

export default ProjectItem;
