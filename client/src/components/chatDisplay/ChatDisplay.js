import React from 'react';
import { Display } from './chatDisplayStyle';

const ChatDisplay = props => {
  console.log(props);

  return (
    <Display>
      <div>Messages:</div>
      <form>
        <input type="text" onChange={e => console.log(e)} />
        <button type="submit">Send Message</button>
      </form>
    </Display>
  );
};

export default ChatDisplay;
