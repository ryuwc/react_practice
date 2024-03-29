import io from "socket.io-client";

const ENDPOINT = process.env.REACT_APP_SIGNALING_SERVER_URL;

// let socket = io(ENDPOINT);

// let socket = io('http://localhost:3001', {
// 	path: '/socket.io',
// 	transports: ['websocket', "ws", "wss"],
// });

let socket = io("http://localhost:3001")

export const socketInit = () => {

};

export const socketJoin = (name, room) => {
	socket.emit("join", { name, room }, error => {
		if (error) {
			alert(error);
		}
	});
};

export const sendMessage = (event, message, setMessage) => {
	event.preventDefault();
	if (message) {
		socket.emit("sendMessage", message, () => {});
	}
	setMessage("");
};

export const listenMessage = setMessages => {
	socket.on("message", message => {
		console.log("Litening message ", message);
		// console.log(message)
		setMessages(messages => [...messages, message]);
	});
};

export const sendFormMessage = event => {
	event.preventDefault();
	socket.emit("sendMessage", "firstForm", () => {});
};

export const sendSecondDeliveryFormMessage = event => {
	event.preventDefault();
	socket.emit("sendMessage", "secondDeliveryForm", () => {});
};

export const sendSecondPickUpFormMessage = event => {
	event.preventDefault();
	socket.emit("sendMessage", "secondPickUpForm", () => {});
};

export const sendThirdPickUpFormMessage = event => {
	event.preventDefault();
	socket.emit("sendMessage", "thirdPickUpForm", () => {});
};

export const sendThirdDeliveryFormMessage = event => {
	event.preventDefault();
	socket.emit("sendMessage", "thirdDeliveryForm", () => {});
};
