import React from 'react';

import deliveryButtonFormImage from './img/DeliveryButtonFormImage.png';

import './FirstForm.css';
import {secondDeliveryFormSendMessage, secondPickUpFormSendMessage} from "../../../../util/chat";
import {
  DeliveryFormButton,
  DeliveryFormButtonImage,
  DeliveryFormContent,
  FirstFormLayout,
  FirstFormTitle
} from "./firstFormStyle";

function FirstForm({isSentByCurrentUser}) {

  return (
    <FirstFormLayout>
      <FirstFormTitle>상품을 어떻게<br />보내시겠어요?</FirstFormTitle>
      <DeliveryFormButton className="btn" onClick={e => secondDeliveryFormSendMessage(e)}>
        <DeliveryFormButtonImage src={deliveryButtonFormImage} alt="deliveryButtonFormImage"/>
        <DeliveryFormContent>배달로 보낼게요</DeliveryFormContent>
      </DeliveryFormButton>
      <button className="btn" onClick={e => secondPickUpFormSendMessage(e)}>포장</button>
    </FirstFormLayout>
  );
}

export default FirstForm;