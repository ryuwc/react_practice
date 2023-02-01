import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

import Input from "../Input/Input";
import Messages from "../Messages/Messages";

import {useRecoilValue} from "recoil";
import {nameState, roomState} from "../../state/atom";
import {listenMessage, socketJoin} from "../../util/chat";
import {ChatLayout} from "./chatStyle";
import ErrorModal from "../Messages/Message/forms/errorModal/ErrorModal";
import {isErrorModalShowState} from "../../state/chat";

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

  const isErrorModalShow = useRecoilValue(isErrorModalShowState)

  return (
    <ChatLayout>
      <Messages messages={messages}/>
      <Input message={message} setMessage={setMessage} />
      {isErrorModalShow && <ErrorModal/>}
    </ChatLayout>
  )
}

export default Chat