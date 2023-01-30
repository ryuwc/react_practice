import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import Input from "../Input/Input";
import Messages from "../Messages/Messages";

import './Chat.css'

import {useRecoilState} from "recoil";
import {nameState, roomState} from "../../state/atom";
import {socketJoin} from "../../util/chat";

const ENDPOINT = 'http://localhost:5000'

let socket;

const Chat = ({ location }) => {
  // const [name, setName] = useState('')
  const [name, setName] = useRecoilState(nameState)
  const [room, setRoom] = useRecoilState(roomState)
  // const [users, setUsers] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    // 여기선 name과 room을 url에서 가져온다.
    // 이유는 setRoom과 setName이 적용되기 전에 socket.emit('join')이 실행되기 때문이다.
    // url에서 가져오는 방법이 아닌 다른 방법으로 name과 room을 가져오려면
    // 미리 정해진 방법으로 name과 room을 가져오는 것이 아닌
    // socket.emit('join')이 실행되기 전에 setRoom과 setName이 실행되도록 해야 한다.

    socket = io(ENDPOINT)

    // console.log(name, room)

    socketJoin(name, room)
  }, [ENDPOINT, window.location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      console.log(message)
      setMessages((messages) => [...messages, message])
    })

    // socket.on('roomData', ({ users }) => {
    //   setUsers(users)
    // })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()

    // console.log('chat.js', message)
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  const firstFormSendMessage = (event) => {
    event.preventDefault()
    // console.log('btnSendMessage')
    socket.emit('sendMessage', 'firstForm', () => {})
  }

  const secondDeliveryFormSendMessage = (event) => {
    event.preventDefault()
    console.log('두번째 배달')
    socket.emit('sendMessage', 'secondDeliveryForm', () => {})
  }

  return (
    <div className='outerContainer'>
      <div className='container'>
        <Messages messages={messages} name={name} secondDeliveryFormSendMessage={secondDeliveryFormSendMessage}/>
        <Input sendMessage={sendMessage} firstFormSendMessage={firstFormSendMessage} />
      </div>
      {/*<TextContainer users={users} />*/}
    </div>
  )
}

export default Chat