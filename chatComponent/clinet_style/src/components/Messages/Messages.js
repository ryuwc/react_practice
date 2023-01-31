import React, {useEffect} from 'react';

import Message from "./Message/Message";
import {ChatList} from "./messagesStyle";

function Messages({ messages}) {
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  // useEffect(() => {
  //   const
  // }, [messages]);

  return (
    <ChatList>
      {messages.map((message, i) => {
        const time = `${new Date().getHours().toString().padStart(2, "0")}:${new Date().getMinutes().toString().padStart(2, "0")}`
        return <div key={i}><Message time={time} message={message}/></div>
      })}
    </ChatList>
  );
}

export default Messages;