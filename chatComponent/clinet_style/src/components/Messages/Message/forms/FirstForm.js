import React from 'react';

import deliveryButtonFormImage from './img/DeliveryButtonFormImage.png';

import './FirstForm.css';
import {secondDeliveryFormSendMessage, secondPickUpFormSendMessage} from "../../../../util/chat";
import {
  FormButton,
  DeliveryFormButtonImage,
  DeliveryFormContent,
  FirstFormLayout,
  FirstFormTitle
} from "./firstFormStyle";

function FirstForm({isSentByCurrentUser}) {

  return (
    <FirstFormLayout>
      <FirstFormTitle>상품을 어떻게<br />보내시겠어요?</FirstFormTitle>
      <FormButton className="btn" onClick={e => secondDeliveryFormSendMessage(e)}>
        <DeliveryFormButtonImage src={deliveryButtonFormImage} alt="deliveryButtonFormImage"/>
        <DeliveryFormContent>배달로 보낼게요</DeliveryFormContent>
      </FormButton>
      <FormButton className="btn" onClick={e => secondPickUpFormSendMessage(e)}>
        포장
      </FormButton>
    </FirstFormLayout>
  );
}

export default FirstForm;