import React, { useState } from 'react';

const MessageForm = () => {
  const [message, setMessage] = useState("'");
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Message here ..."
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default MessageForm;
