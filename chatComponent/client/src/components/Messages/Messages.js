import React, {useEffect} from 'react';

import BasicScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";

import './Messages.css';

function Messages({ messages, name, secondDeliveryFormSendMessage }) {
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <BasicScrollToBottom className="messages">
      {messages.map((message, i) => {
        return <div key={i}><Message message={message} name={name} secondDeliveryFormSendMessage={secondDeliveryFormSendMessage}/></div>
      })}
    </BasicScrollToBottom>
  );
}

export default Messages;