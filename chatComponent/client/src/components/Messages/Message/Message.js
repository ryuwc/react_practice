import React from "react";

import "./Message.css";
import FirstForm from "./forms/FirstForm";

function Message({ message: { user, text, type }, name, secondDeliveryFormSendMessage }) {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  console.log(isSentByCurrentUser);

  // 현재 시간 hh:mm
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;

  return (
    <div>
      {isSentByCurrentUser && type === 'message' && (
        <div className="messageContainer justifyEnd">
          <div className="textTime">
            <div className="messageBox backgroundBlue">
              <p className="messageText colorWhite">{text}</p>
            </div>
            <p>{time}</p>
          </div>
        </div>
      )}
      {!isSentByCurrentUser && type === 'message' && (
        <div className="messageContainer justifyStart">
          <div className="textTime">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{text}</p>
            </div>
            <p>{time}</p>
          </div>
        </div>
      )}
      {isSentByCurrentUser && type === 'firstForm' && <FirstForm secondDeliveryFormSendMessage={secondDeliveryFormSendMessage} />}
      {!isSentByCurrentUser && type === 'firstForm' && <FirstForm secondDeliveryFormSendMessage={secondDeliveryFormSendMessage} />}
      {isSentByCurrentUser && type === 'secondDeliveryForm' && <input type="text" />}
      {!isSentByCurrentUser && type === 'secondDeliveryForm' && <input type="text"/>}
    </div>
  )

  // 메세지에서 채팅방에 태그를 넣을 수 있음
  // const textTag = <button>안녕</button>
  //
  // return (
  //   <div>
  //     {textTag}
  //   </div>
  // )
}

export default Message;
