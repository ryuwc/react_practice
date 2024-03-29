import { useState, useEffect } from "react";

import Input from "./input/Input";
import Messages from "./messages/Messages";

import { useRecoilState, useRecoilValue } from "recoil";
import { isErrorModalShowState, sendUserPhoneState, sendUserState } from "../../recoil/chatting";
import { listenMessage, socketInit, socketJoin } from "../../utils/chatting";
import { ChatLayout } from "../../styles/chatting/ChattingStyle";
import ErrorModal from "./errorModal/ErrorModal";
import { LmySessionIdState, LmyTypeState } from "../../recoil/flolive";
import { userType } from "../../utils/user";
import useChattingAPI from "../../hooks/useChattingAPI";

const ENDPOINT = "http://localhost:3001";

const Chat = ({myType, mySessionId}) => {
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);
	const [sendUser, setSendUser] = useRecoilState(sendUserState);
	const [sendUserPhone, setSendUserPhone] = useRecoilState(sendUserPhoneState);
	const { getMyNickPhone } = useChattingAPI();

	socketInit();

	useEffect(() => {
		console.log("myType", myType);
		console.log("mySessionId", mySessionId);
		socketJoin("사장", "123");
	}, [ENDPOINT, window.location.search]);

	useEffect(() => {
		listenMessage(setMessages);
	}, []);

	useEffect(() => {
		getMyNickPhone(setSendUser, setSendUserPhone);
	}, []);

	const isErrorModalShow = useRecoilValue(isErrorModalShowState);

	return (
		<ChatLayout>
			<Messages messages={messages} />
			<Input message={message} setMessage={setMessage} />
			{isErrorModalShow && <ErrorModal />}
		</ChatLayout>
	);
};

export default Chat;
