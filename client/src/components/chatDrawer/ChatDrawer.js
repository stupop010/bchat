import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import SettingsIcon from '@material-ui/icons/Settings';

import useStyles from './chatDrawerStyle';
import TitleButton from './TitleButton';
import ChannelDetails from './ChannelDetails';
import PinnedMessagesContainer from './PinnedMessagesContainer';

const ChatDrawer = ({ panelOpen, setDrawerOpen }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(panelOpen);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : '');
  };

  useEffect(() => {
    setExpanded(panelOpen);
  }, [panelOpen]);

  return (
    <Box className={classes.root}>
      <TitleButton setDrawerOpen={setDrawerOpen} />
      <Divider />
      <ExpansionPanel
        expanded={expanded === 'channelDetails'}
        onChange={handleChange('channelDetails')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <SettingsIcon className={classes.mr3} />
          <Typography className={classes.heading}>Channel Details</Typography>
        </ExpansionPanelSummary>
        <ChannelDetails />
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'pinnedItems'}
        onChange={handleChange('pinnedItems')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Pinned Items</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <PinnedMessagesContainer />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'members'}
        onChange={handleChange('members')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Members</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Box>
  );
};

ChatDrawer.propTypes = {
  panelOpen: PropTypes.string.isRequired,
  setDrawerOpen: PropTypes.func.isRequired,
};

export default ChatDrawer;
