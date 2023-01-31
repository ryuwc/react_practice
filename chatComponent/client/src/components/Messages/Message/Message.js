import React from "react";
import "./Message.css";
import FirstForm from "./forms/FirstForm";
import SecondDeliveryForm from "./forms/SecondDeliveryForm";
import SecondPickUpForm from "./forms/SecondPickUpForm";
import { useRecoilValue } from "recoil";
import { nameState } from "../../../state/atom";
import ThirdPickUpForm from "./forms/ThirdPickUpForm";

function Message({ message: { user, text, type }}) {
  const name = useRecoilValue(nameState)
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
      {isSentByCurrentUser && type === 'firstForm' && <FirstForm isSentByCurrentUser={isSentByCurrentUser}/>}
      {!isSentByCurrentUser && type === 'firstForm' && <FirstForm isSentByCurrentUser={isSentByCurrentUser}/>}
      {isSentByCurrentUser && type === 'secondDeliveryForm' && <SecondDeliveryForm />}
      {!isSentByCurrentUser && type === 'secondDeliveryForm' && <SecondDeliveryForm />}
      {isSentByCurrentUser && type === 'secondPickUpForm' && <SecondPickUpForm />}
      {!isSentByCurrentUser && type === 'secondPickUpForm' && <SecondPickUpForm />}
      {isSentByCurrentUser && type === 'thirdPickUpForm' && <ThirdPickUpForm />}
      {!isSentByCurrentUser && type === 'thirdPickUpForm' && <ThirdPickUpForm />}
    </div>
  )
}

export default Message;
