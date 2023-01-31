import React from 'react';
import sendImage from './img/MessageSendImage.png';
import formImage from './img/FromImage.png';

import {useRecoilValue} from "recoil";
import {nameState} from "../../state/atom";
import {firstFormSendMessage, sendMessage} from "../../util/chat";
import {FormButton, FormButtonImage, InputButton, InputButtonImage, InputLayout, InputText} from "./inputStyle";

function Input ({ message, setMessage }) {
  const name = useRecoilValue(nameState)

  const isOwner = name === '사장';
  
  return (
    <InputLayout>
      <InputText type='text' placeholder="메시지를 입력하세요." value={message} isOwner={isOwner} onChange={(event) => setMessage(event.target.value)}/>
      {isOwner && <FormButton onClick={e => firstFormSendMessage(e)}>
        <FormButtonImage src={formImage} alt=""/>
      </FormButton>}
      <InputButton onClick={e => sendMessage(e, message, setMessage)}>
        <InputButtonImage src={sendImage} alt="#"/>
      </InputButton>
    </InputLayout>
  )
}

export default Input;