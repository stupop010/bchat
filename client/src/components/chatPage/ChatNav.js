import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';

import { addStarred } from '../../store/actions/projects';
import { Nav, NavPaper } from './chatDisplayStyle';

const ChatNav = ({ channel }) => {
  const { projectName } = useParams();
  const dispatch = useDispatch();

  const click = () => {
    dispatch(addStarred(channel.id));
  };

  return (
    <Nav>
      <NavPaper>
        <Typography>
          #{projectName} #{channel.name}
        </Typography>
        <div>
          <Box component="span" onClick={click}>
            <StarBorderIcon fontSize="small" /> |
          </Box>
        </div>
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
};

export default ChatNav;
