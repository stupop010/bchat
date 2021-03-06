import React from 'react';
// import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import RoomIcon from '@material-ui/icons/Room';
import Typography from '@material-ui/core/Typography';
// import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import Tooltip from '@material-ui/core/Tooltip';
import SettingsIcon from '@material-ui/icons/Settings';

import { createPinnedMessage } from '../../store/actions/projectsAction';
import {
  Nav,
  NavPaper,
  ProjectName,
  NavList,
  ChannelDescription,
} from './chatDisplayStyle';

const ChatNav = ({ channel, setPanelOpen, setDrawerOpen, drawerOpen }) => {
  const { projectName } = useParams();
  // const dispatch = useDispatch();

  const click = () => {
    createPinnedMessage(channel.id);
  };

  const Description = () => {
    if (channel.description) {
      return (
        <Tooltip
          title={channel.description}
          interactive
          aria-label={channel.description}
        >
          <ChannelDescription>{channel.description}</ChannelDescription>
        </Tooltip>
      );
    }
    return (
      <Tooltip title="Add a topic" interactive aria-label="Add a topic">
        <ChannelDescription>Add a topic</ChannelDescription>
      </Tooltip>
    );
  };

  return (
    <Nav>
      <NavPaper>
        <ProjectName variant="h3">{projectName}</ProjectName>
        <NavList>
          <Typography variant="h4">#{channel.name}</Typography>

          <Tooltip title="Add To Favourites" aria-label="add to favourites">
            <Box component="span" onClick={click}>
              <StarBorderIcon />
            </Box>
          </Tooltip>

          <Tooltip title="Pinned Messages" aria-label="pinned messages">
            <Box
              component="span"
              onClick={() => {
                setPanelOpen('pinnedItems');
                setDrawerOpen(!drawerOpen);
              }}
            >
              <RoomIcon />
            </Box>
          </Tooltip>

          <Tooltip title="Channel Setting" aria-label="channel setting">
            <Box
              component="span"
              onClick={() => {
                setPanelOpen('channelDetails');
                setDrawerOpen(!drawerOpen);
              }}
            >
              <SettingsIcon />
            </Box>
          </Tooltip>

          <Description />
        </NavList>
      </NavPaper>
    </Nav>
  );
};

ChatNav.propTypes = {
  channel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    private: PropTypes.bool,
  }).isRequired,
  setPanelOpen: PropTypes.func.isRequired,
  setDrawerOpen: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
};

export default ChatNav;
