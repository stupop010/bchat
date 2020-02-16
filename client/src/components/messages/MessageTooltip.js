import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const MessageTooltip = ({ toggleEditMode }) => {
  return (
    <div>
      <Button onClick={toggleEditMode}>edit me</Button>
    </div>
  );
};

MessageTooltip.propTypes = {
  toggleEditMode: PropTypes.func.isRequired,
};

export default MessageTooltip;
