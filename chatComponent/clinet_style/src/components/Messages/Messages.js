import React, {useEffect} from 'react';

import Message from "./Message/Message";
import {ChatList} from "./messagesStyle";

function Messages({ messages}) {
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <ChatList>
      {messages.map((message, i) => {
        return <div key={i}><Message message={message}/></div>
      })}
    </ChatList>
  );
}

export default Messages;