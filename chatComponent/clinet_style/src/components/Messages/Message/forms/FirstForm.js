import React from 'react';
import deliveryButtonFormImage from './img/DeliveryButtonFormImage.png';
import {secondDeliveryFormSendMessage, secondPickUpFormSendMessage} from "../../../../util/chat";
import {
  SubmitButton,
  ButtonImage,
  FormText,
  FormContainer,
  FormTitle, FormTime
} from "./firstFormStyle";
import {YourMessageTime} from "../messageStyle";

function FirstForm({time}) {

  return (
    <>
      <FormContainer>
        <FormTitle>상품을 어떻게<br />보내시겠어요?</FormTitle>
        <SubmitButton className="btn" onClick={e => secondDeliveryFormSendMessage(e)}>
          <ButtonImage src={deliveryButtonFormImage} alt="deliveryButtonFormImage"/>
          <FormText>배달로 보낼게요</FormText>
        </SubmitButton>
        <SubmitButton className="btn" onClick={e => secondPickUpFormSendMessage(e)}>
          포장
        </SubmitButton>
      </FormContainer>
      <FormTime>
        {time}
      </FormTime>
    </>
  );
}

export default FirstForm;