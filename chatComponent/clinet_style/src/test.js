import React from "react";
import "./Message.css";
import FirstForm from "./forms/FirstForm";
import SecondDeliveryForm from "./forms/SecondDeliveryForm";
import { useRecoilValue } from "recoil";
import { nameState } from "../../../state/atom";

function Message({ message: { user, text, type }}) {
  const name = useRecoilValue(nameState);
  const isSentByCurrentUser = user.trim().toLowerCase() === name.trim().toLowerCase();
  const date = new Date();
  const time = `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;

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
      {type === 'firstForm' && <FirstForm isSentByCurrentUser={isSentByCurrentUser} />}
      {type === 'secondDeliveryForm' && <SecondDeliveryForm />}
    </div>
  )
}

export default Message;