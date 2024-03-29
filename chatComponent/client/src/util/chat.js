import io from 'socket.io-client'

const ENDPOINT = 'http://localhost:5000'

let socket = io(ENDPOINT)

export const socketJoin = (name, room) => {
  socket.emit('join', { name, room }, (error) => {
    if (error) {
      alert(error)
    }
  })
}

export const sendMessage = (event, message, setMessage) => {
  event.preventDefault()
  if (message) {
    socket.emit('sendMessage', message, () => {})
  }
  setMessage('')
}

export const listenMessage = (setMessages) => {
  socket.on('message', (message) => {
    console.log(message)
    setMessages((messages) => [...messages, message])
  })
}

export const firstFormSendMessage = (event) => {
  event.preventDefault()
  socket.emit('sendMessage', 'firstForm', () => {})
}

export const secondDeliveryFormSendMessage = (event) => {
  event.preventDefault()
  socket.emit('sendMessage', 'secondDeliveryForm', () => {})
}

export const secondPickUpFormSendMessage = (event) => {
  event.preventDefault()
  socket.emit('sendMessage', 'secondPickUpForm', () => {})
}

export const ThirdPickUpFormSendMessage = (event) => {
  event.preventDefault()
  socket.emit('sendMessage', 'thirdPickUpForm', () => {})
}