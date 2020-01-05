import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Form,
  MessageInput,
  MessageContainer,
  BoldSpan,
} from './messageBoxStyle';

const MessageBox = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    sendMessage(message);
    setMessage('');
  };

  const onKeyPress = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      onSubmit(e);
    }
  };

  return (
    <MessageContainer maxWidth="xl">
      <Form onSubmit={onSubmit}>
        <MessageInput
          variant="outlined"
          placeholder="Message..."
          onChange={e => setMessage(e.target.value)}
          onKeyPress={e => onKeyPress(e)}
          value={message}
          rowsMax="4"
          multiline
          helperText={
            <>
              <BoldSpan>Return</BoldSpan> to send
              <BoldSpan>Shift + Return</BoldSpan> to add new line
            </>
          }
        />
        {/* <button type="submit">Send Message</button> */}
      </Form>
    </MessageContainer>
  );
};

MessageBox.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

export default MessageBox;
