import React from 'react';

import './Input.css';
import {useRecoilState, useRecoilValue} from "recoil";
import {nameState} from "../../state/atom";

function Input ({ setMessage, sendMessage, message, btnSendMessage }) {
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
        onChange={({ target: { value } }) => setMessage(value)}
      />
      {isOwner && <button onClick={e => btnSendMessage(e)}>첨부</button>}
      <button className="sendButton" onClick={e => sendMessage(e)}>전송</button>
    </form>
  )
}

export default Input;