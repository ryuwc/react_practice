import React from "react";

import "./Message.css";

import ReactEmoji from "react-emoji";

function Message({ message: { user, text, type }, name }) {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  console.log(isSentByCurrentUser);

  return (
    <div>
      {isSentByCurrentUser && type === 'message' && (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{text}</p>
            {type === "form" && <button>첨부파일</button>}
          </div>
        </div>
      )}
      {!isSentByCurrentUser && type === 'message' && (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{text}</p>
            {type === "form" && <button>첨부파일</button>}
          </div>
          <p className="sentText pl-10 ">{user}</p>
        </div>
      )}
      {isSentByCurrentUser && type === 'form' && (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <button>첨부파일</button>
          </div>
        </div>
      )}
      {!isSentByCurrentUser && type === 'form' && (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <form>
              <label htmlFor=""></label>
            </form>
          </div>
          <p className="sentText pl-10 ">{user}</p>
        </div>
      )}

    </div>
  );

  // 메세지에서 채팅방에 태그를 넣을 수 있음
  // const textTag = <button>안녕</button>
  //
  // return (
  //   <div>
  //     {textTag}
  //   </div>
  // )
}

export default Message;
