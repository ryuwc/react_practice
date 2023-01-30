import React, {useState} from 'react';

import './SecondDeliveryForm.css';

function SecondDeliveryForm() {
  const [sendUser, setSendUser] = useState('');
  const [receiveUser, setReceiveUser] = useState('');
  const [giftCard, setGiftCard] = useState('');

  const phoneValidate = (target) => {
    target.value = target.value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
  }

  return (
    <form className="container-second-delivery-form">
      <p>배달 주문</p>
      <label htmlFor="sendUser">보내는 분</label>
      <input type="text" id="sendUser" placeholder="내용을 입력해주세요." onChange={e => setSendUser(e.target.value)}/>
      <p>{sendUser.length}/25자</p>
      <label htmlFor="sendUserPhone">보내는 분 전화번호</label>
      <input type="text" id="sendUserPhone" maxLength="13" placeholder="- 없이 입력해주세요." onChange={e => phoneValidate(e.target)}/>
      <label htmlFor="receiveUser">받는 분</label>
      <input type="text" id="receiveUser" placeholder="내용을 입력해주세요." onChange={e => setReceiveUser(e.target.value)}/>
      <p>{receiveUser.length}/25자</p>
      <label htmlFor="receiveUserPhone">받는 분 전화번호</label>
      <input type="text" id="receiveUserPhone" maxLength="13" placeholder="- 없이 입력해주세요." onChange={e => phoneValidate(e.target)}/>
      <label htmlFor="receiveUserAddress">배송지</label>
      <input type="text" id="receiveUserAddress" placeholder="내용을 입력해주세요."/>
      <input type="text" placeholder="상세 주소"/>
      <label htmlFor="giftCard">선물 카드 내용</label>
      <textarea id="giftCard" placeholder="내용을 입력해주세요." onChange={e => setGiftCard(e.target.value)}/>
      <p>{giftCard.length}/100자</p>
    </form>
  );
}

export default SecondDeliveryForm;