import React from 'react';

import './Input.css';
import {useRecoilValue} from "recoil";
import {nameState} from "../../state/atom";
import {firstFormSendMessage, sendMessage} from "../../util/chat";

function Input ({ message, setMessage }) {
  // const name = useRecoilValue(nameState)
  const name = useRecoilValue(nameState)

  const isOwner = name === '사장';
  
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="전송하려는 메시지를 입력하세요."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      {isOwner && <button onClick={e => firstFormSendMessage(e)}>첨부</button>}
      <button className="sendButton" onClick={e => sendMessage(e, message, setMessage)}>전송</button>
    </form>
  )
}

export default Input;