import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const MessageTooltip = ({ toggleEditMode, pinMessage }) => {
  return (
    <div>
      <Button onClick={toggleEditMode}>edit me</Button>
      <Button onClick={pinMessage}>Pinned Message</Button>
    </div>
  );
};

MessageTooltip.propTypes = {
  toggleEditMode: PropTypes.func.isRequired,
  pinMessage: PropTypes.func.isRequired,
};

export default MessageTooltip;
