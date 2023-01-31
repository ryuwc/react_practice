import React from 'react';
import {useRecoilValue} from "recoil";
import {giftCardState, paymenAmountState, sendUserPhoneState, sendUserState} from "../../../../state/chat";

function ThirdPickUpForm() {
  const sendUser = useRecoilValue(sendUserState);
  const sendUserPhone = useRecoilValue(sendUserPhoneState);
  const giftCard = useRecoilValue(giftCardState);
  const paymenAmount = useRecoilValue(paymenAmountState);

  return (
    <form>
      <p>픽업 주문 확인</p>
      <p>보내는 분</p>
      <p>{sendUser}</p>
      <p>보내는 분 전화번호</p>
      <p>{sendUserPhone}</p>
      <p>선물 카드 내용</p>
      <p>{giftCard}</p>
      <p>결제 금액</p>
      <p>{paymenAmount}</p>
      <button>결제하기</button>
    </form>
  );
}

export default ThirdPickUpForm;