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

export const textCode = (event) => {
  event.preventDefault()
  // console.log('btnSendMessage')
  socket.emit('sendMessage', 'firstForm', () => {})
}