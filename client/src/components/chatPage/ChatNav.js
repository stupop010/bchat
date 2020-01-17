import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import Tooltip from '@material-ui/core/Tooltip';
import SettingsIcon from '@material-ui/icons/Settings';

import { addStarred } from '../../store/actions/projectsAction';
import {
  Nav,
  NavPaper,
  ProjectName,
  NavList,
  ChannelDescription,
} from './chatDisplayStyle';

const ChatNav = ({ channel, setPanelOpen, setDrawerOpen }) => {
  const { projectName } = useParams();
  const dispatch = useDispatch();

  const click = () => {
    dispatch(addStarred(channel.id));
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
          <Tooltip title="Important Messages" aria-label="important messages">
            <Box
              component="span"
              onClick={() => {
                setPanelOpen('pinnedItems');
                setDrawerOpen(true);
              }}
            >
              <PriorityHighIcon />
            </Box>
          </Tooltip>
          <Tooltip title="Channel Setting" aria-label="channel setting">
            <Box
              component="span"
              onClick={() => {
                setPanelOpen('channelDetails');
                setDrawerOpen(true);
              }}
            >
              <SettingsIcon />
            </Box>
          </Tooltip>
          <Tooltip
            title={channel.description}
            interactive
            aria-label={channel.description}
          >
            <ChannelDescription>{channel.description}</ChannelDescription>
          </Tooltip>
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
};

export default ChatNav;
