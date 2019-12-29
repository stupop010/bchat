import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { addStarred } from '../../redux/actions/projects';

const ChatNav = ({ channel }) => {
  const dispatch = useDispatch();

  const click = () => {
    dispatch(addStarred(channel.id));
  };

  return (
    <nav>
      <Box component="div">
        <h3>#{channel.name}</h3>
        <div>
          <Box component="span" onClick={click}>
            <StarBorderIcon fontSize="small" /> |
          </Box>
        </div>
      </Box>
    </nav>
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
