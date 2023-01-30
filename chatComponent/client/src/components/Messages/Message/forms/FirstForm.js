import React from 'react';

import './FirstForm.css';
import {secondDeliveryFormSendMessage} from "../../../../util/chat";

function FirstForm({isSentByCurrentUser}) {

  return (
    <form className="firstForm">
      <p>상품을 어떻게 보내시겠어요?</p>
      <button className="btn" onClick={e => secondDeliveryFormSendMessage(e)}>배달</button>
      <button className="btn">포장</button>
    </form>
  );
}

export default FirstForm;