import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import Input from "../Input/Input";
import Messages from "../Messages/Messages";

import './Chat.css'

import {useRecoilState, useRecoilValue} from "recoil";
import {messageState, nameState, roomState} from "../../state/atom";
import {listenMessage, socketJoin} from "../../util/chat";

const ENDPOINT = 'http://localhost:5000'

let socket;

const Chat = ({ location }) => {
  // const [name, setName] = useState('')
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


  const secondDeliveryFormSendMessage = (event) => {
    event.preventDefault()
    console.log('두번째 배달')
    socket.emit('sendMessage', 'secondDeliveryForm', () => {})
  }

  return (
    <div className='outerContainer'>
      <div className='container'>
        <Messages messages={messages}/>
        <Input message={message} setMessage={setMessage} />
      </div>
    </div>
  )
}

export default Chat