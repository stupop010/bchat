import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import { ChannelListItem } from './menuStyles';

const ChannelList = ({ channel }) => {
  const { url } = useRouteMatch();

  return (
    <ChannelListItem button>
      <ListItemText>
        <Link to={`${url}/${channel.name}/${channel.id}`}>
          # {channel.name}
        </Link>
      </ListItemText>
    </ChannelListItem>
  );
};

ChannelList.propTypes = {
  channel: PropTypes.shape({
    name: PropTypes.string,
    private: PropTypes.bool,
    description: PropTypes.string,
    project_id: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};

export default ChannelList;
