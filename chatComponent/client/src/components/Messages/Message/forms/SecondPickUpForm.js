import React, {useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {giftCardState, paymenAmountState, sendUserPhoneState, sendUserState} from "../../../../state/chat";
import {ThirdPickUpFormSendMessage} from "../../../../util/chat";

function SecondPickUpForm() {
  const [sendUser, setSendUser] = useRecoilState(sendUserState);
  const [sendUserPhone, setSendUserPhone] = useRecoilState(sendUserPhoneState);
  const [giftCard, setGiftCard] = useRecoilState(giftCardState);
  const [paymenAmount, setPaymentAmount] = useRecoilState(paymenAmountState);

  const phoneValidate = (target) => {
    target.value = target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");
    setSendUserPhone(target.value);
  };

  return (
    <form className="container-second-delivery-form">
      <p>픽업 주문</p>
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
        onChange={(e) => phoneValidate(e.target)}
      />
      <label htmlFor="giftCard">선물 카드 내용</label>
      <textarea
        id="giftCard"
        placeholder="내용을 입력해주세요."
        onChange={(e) => setGiftCard(e.target.value)}
      />
      <p>{giftCard.length}/100자</p>
      <label htmlFor="paymenAmount">결제 금액</label>
      <input
        type="text"
        id="paymenAmount"
        placeholder="내용을 입력해주세요."
        onChange={(e) => setPaymentAmount(e.target.value)}
      />
      <button onClick={(e) => ThirdPickUpFormSendMessage(e)}>작성완료</button>
    </form>
  );
}

export default SecondPickUpForm;
