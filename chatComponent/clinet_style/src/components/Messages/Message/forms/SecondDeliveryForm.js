import React, { useState } from "react";

import "./SecondDeliveryForm.css";
import { useRecoilState } from "recoil";
import {
  giftCardState,
  receiveUserPhoneState,
  receiveUserState,
  sendUserPhoneState,
  sendUserState,
} from "../../../../state/chat";
import {ThirdDeliveryFormSendMessage} from "../../../../util/chat";

function SecondDeliveryForm() {
  const [sendUser, setSendUser] = useRecoilState(sendUserState);
  const [sendUserPhone, setSendUserPhone] = useRecoilState(sendUserPhoneState);
  const [receiveUser, setReceiveUser] = useRecoilState(receiveUserState);
  const [receiveUserPhone, setReceiveUserPhone] = useRecoilState(
    receiveUserPhoneState
  );
  const [giftCard, setGiftCard] = useRecoilState(giftCardState);

  const phoneValidate = (target, type) => {
    target.value = target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");
    if (type === 'sendUserPhone') {
      setSendUserPhone(target.value);
    } else {
      setReceiveUserPhone(target.value);
    }
  };

  return (
    <form className="container-second-delivery-form">
      <p>배달 주문</p>
      <label htmlFor="sendUser">보내는 분</label>
      <input
        type="text"
        id="sendUser"
        placeholder="내용을 입력해주세요."
        onChange={(e) => setSendUser(e.target.value)}
      />
      <p>{sendUser.length}/25자</p>
      <label htmlFor="sendUserPhone">보내는 분 전화번호</label>
      <input
        type="text"
        id="sendUserPhone"
        maxLength="13"
        placeholder="- 없이 입력해주세요."
        onChange={(e) => phoneValidate(e.target, 'sendUserPhone')}
      />
      <label htmlFor="receiveUser">받는 분</label>
      <input
        type="text"
        id="receiveUser"
        placeholder="내용을 입력해주세요."
        onChange={(e) => setReceiveUser(e.target.value)}
      />
      <p>{receiveUser.length}/25자</p>
      <label htmlFor="receiveUserPhone">받는 분 전화번호</label>
      <input
        type="text"
        id="receiveUserPhone"
        maxLength="13"
        placeholder="- 없이 입력해주세요."
        onChange={(e) => phoneValidate(e.target, 'receiveUserPhone')}
      />
      <label htmlFor="receiveUserAddress">배송지</label>
      <input
        type="text"
        id="receiveUserAddress"
        placeholder="내용을 입력해주세요."
      />
      <input type="text" placeholder="상세 주소" />
      <label htmlFor="giftCard">선물 카드 내용</label>
      <textarea
        id="giftCard"
        placeholder="내용을 입력해주세요."
        onChange={(e) => setGiftCard(e.target.value)}
      />
      <p>{giftCard.length}/100자</p>
      <label htmlFor="paymenAmount">결제 금액</label>
      <input type="text" id="paymenAmount" placeholder="내용을 입력해주세요." />
      <button onClick={e => ThirdDeliveryFormSendMessage(e)}>결제하기</button>
    </form>
  );
}

export default SecondDeliveryForm;
