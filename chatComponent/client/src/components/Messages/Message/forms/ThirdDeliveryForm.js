import React from 'react';

function ThirdDeliveryForm() {


  return (
    <form>
      <p>배달 주문 확인</p>
      <p>보내는 분</p>
      <p>{sendUser}</p>
      <p>보내는 분 전화번호</p>
      <p>{sendUserPhone}</p>
      <p>받는 분</p>
      <p>{receiveUser}</p>
      <p>받는 분 전화번호</p>
      <p>{receiveUserPhone}</p>
      <p>배송지</p>
      <p>선물 카드 내용</p>
      <p>{giftCard}</p>
      <p>결제 금액</p>
      <p>{paymenAmount}</p>
      <button>결제하기</button>
    </form>
  );
}

export default ThirdDeliveryForm;