import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

import Input from "../Input/Input";
import Messages from "../Messages/Messages";

import {useRecoilValue} from "recoil";
import {nameState, roomState} from "../../state/atom";
import {listenMessage, socketJoin} from "../../util/chat";
import {ChatLayout} from "./chatStyle";

const ENDPOINT = 'http://localhost:5000'

let socket;

const Chat = () => {
  const name = useRecoilValue(nameState)
  const room = useRecoilValue(roomState)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket = io(ENDPOINT)
    socketJoin(name, room)
  }, [ENDPOINT, window.location.search])

  useEffect(() => {
    listenMessage(setMessages)
  }, [])

  return (
    <ChatLayout>
      <Messages messages={messages}/>
      <Input message={message} setMessage={setMessage} />
    </ChatLayout>
  )
}

export default Chat