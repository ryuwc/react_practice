import React, {useEffect, useState} from "react";
import FirstForm from "./forms/FirstForm";
import SecondDeliveryForm from "./forms/SecondDeliveryForm";
import SecondPickUpForm from "./forms/SecondPickUpForm";
import { useRecoilValue } from "recoil";
import { nameState } from "../../../state/atom";
import ThirdPickUpForm from "./forms/ThirdPickUpForm";
import {
  MessageText,
  MessageTime,
  MessageBox,
  MyMessageContainer,
  MyMessageTime,
  YourMessageContainer, YourMessageTime
} from "./messageStyle";

function Message({ message: { user, text, type }, time}) {
  const name = useRecoilValue(nameState)
  const isSentByCurrentUser = user.trim().toLowerCase() === name.trim().toLowerCase();

  return (
    <div>
      {isSentByCurrentUser && type === 'message' && (
        <MyMessageContainer>
          <MessageTime>
            <MessageBox>
              <MessageText>{text}</MessageText>
            </MessageBox>
            <MyMessageTime>{time}</MyMessageTime>
          </MessageTime>
        </MyMessageContainer>
      )}
      {!isSentByCurrentUser && type === 'message' && (
        <YourMessageContainer>
          <MessageTime>
            <MessageBox>
              <MessageText>{text}</MessageText>
            </MessageBox>
            <YourMessageTime>{`${new Date().getHours().toString().padStart(2, "0")}:${new Date().getMinutes().toString().padStart(2, "0")}`}</YourMessageTime>
          </MessageTime>
        </YourMessageContainer>
      )}
      {isSentByCurrentUser && type === 'firstForm' && <FirstForm isSentByCurrentUser={isSentByCurrentUser}/>}
      {!isSentByCurrentUser && type === 'firstForm' && <FirstForm isSentByCurrentUser={isSentByCurrentUser}/>}
      {isSentByCurrentUser && type === 'secondDeliveryForm' && <SecondDeliveryForm />}
      {!isSentByCurrentUser && type === 'secondDeliveryForm' && <SecondDeliveryForm />}
      {isSentByCurrentUser && type === 'secondPickUpForm' && <SecondPickUpForm />}
      {!isSentByCurrentUser && type === 'secondPickUpForm' && <SecondPickUpForm />}
      {isSentByCurrentUser && type === 'thirdPickUpForm' && <ThirdPickUpForm />}
      {!isSentByCurrentUser && type === 'thirdPickUpForm' && <ThirdPickUpForm />}
      {isSentByCurrentUser && type === 'thirdDeliveryForm' && <ThirdPickUpForm />}
      {!isSentByCurrentUser && type === 'thirdDeliveryForm' && <ThirdPickUpForm />}
    </div>
  )
}

export default Message;
