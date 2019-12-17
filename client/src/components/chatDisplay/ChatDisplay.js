import React from 'react';

const ChatDisplay = props => {
  console.log(props);
  return (
    <div>
      <div>Messages:</div>
      <form>
        <input type="text" onChange={e => console.log(e)} />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ChatDisplay;
