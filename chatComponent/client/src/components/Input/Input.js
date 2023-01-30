import React from 'react';

import './Input.css';
import {useRecoilState} from "recoil";
import {nameState, messageState} from "../../state/atom";
import {textCode} from "../../util/chat";

function Input ({ sendMessage, firstFormSendMessage }) {
  // const name = useRecoilValue(nameState)
  const [message, setMessage] = useRecoilState(messageState)
  const [name, setName] = useRecoilState(nameState)

  const isOwner = name === '사장';
  
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="전송하려는 메시지를 입력하세요."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
      />
      {isOwner && <button onClick={e => textCode(e)}>첨부</button>}
      {/*{isOwner && <button onClick={e => firstFormSendMessage(e)}>첨부</button>}*/}
      <button className="sendButton" onClick={e => sendMessage(e)}>전송</button>
    </form>
  )
}

export default Input;