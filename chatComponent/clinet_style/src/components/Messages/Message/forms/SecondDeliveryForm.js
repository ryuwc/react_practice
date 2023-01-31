import React from "react";
import useInputValidate from "../../../../hooks/use-inputValidate";

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
import {
  ErrorText,
  FormContentContainer,
  FormHeader,
  FormLayout, GiftTextInput, Input, InputBottom16, InputBottom8, InputLength,
  Label, PaymentButton, ValidateInputLengthContainer,
} from "./SecondDeliveryFormStyle";

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

  const isNotEmpty = (value) => value.trim() !== "";
  const {
    // 다른데서 value필요 없으면 지우면 됨
    value: VsendUser,
    hasError: VsendUserHasError,
    valueChangeHandler: VsendUserChangeHandler,
    inputBlurHandler: VsendUserBlurHandler,
  } = useInputValidate(isNotEmpty);

  const {
    // 다른데서 value필요 없으면 지우면 됨
    value: VsendUserPhone,
    hasError: VsendUserPhoneHasError,
    valueChangeHandler: VsendUserPhoneChangeHandler,
    inputBlurHandler: VsendUserPhoneBlurHandler,
  } = useInputValidate(isNotEmpty);

  return (
    <FormLayout>
      <FormHeader>배달 주문</FormHeader>
      <FormContentContainer>
        <Label htmlFor="sendUser">보내는 분</Label>
        <Input
          type="text"
          id="sendUser"
          placeholder="내용을 입력해주세요."
          onChange={(e) => {
            setSendUser(e.target.value);
            VsendUserChangeHandler(e);
          }}
          onBlur={VsendUserBlurHandler}
          HasError={VsendUserHasError}
        />
        <ValidateInputLengthContainer>
          {VsendUserHasError && (
            <ErrorText>보내는 분을 입력해주세요.</ErrorText>
          )}
          <InputLength>{sendUser.length}/25자</InputLength>
        </ValidateInputLengthContainer>
        <Label htmlFor="sendUserPhone">보내는 분 전화번호</Label>
        <InputBottom16
          type="text"
          id="sendUserPhone"
          maxLength="13"
          placeholder="- 없이 입력해주세요."
          onChange={(e) => {
            phoneValidate(e.target, 'sendUserPhone');
            VsendUserPhoneChangeHandler(e);
          }}
          onBlur={VsendUserPhoneBlurHandler}
          HasError={VsendUserPhoneHasError}
        />
        <Label htmlFor="receiveUser">받는 분</Label>
        <Input
          type="text"
          id="receiveUser"
          placeholder="내용을 입력해주세요."
          onChange={(e) => setReceiveUser(e.target.value)}
        />
        <InputLength>{receiveUser.length}/25자</InputLength>
        <Label htmlFor="receiveUserPhone">받는 분 전화번호</Label>
        <InputBottom16
          type="text"
          id="receiveUserPhone"
          maxLength="13"
          placeholder="- 없이 입력해주세요."
          onChange={(e) => phoneValidate(e.target, 'receiveUserPhone')}
        />
        <Label htmlFor="receiveUserAddress">배송지</Label>
        <InputBottom8
          type="text"
          id="receiveUserAddress"
          placeholder="내용을 입력해주세요."
        />
        <InputBottom16 type="text" placeholder="상세 주소" />
        <Label htmlFor="giftCard">선물 카드 내용</Label>
        <GiftTextInput
          id="giftCard"
          placeholder="내용을 입력해주세요."
          onChange={(e) => setGiftCard(e.target.value)}
        />
        <InputLength>{giftCard.length}/100자</InputLength>
        <Label htmlFor="paymenAmount">결제 금액</Label>
        <Input type="text" id="paymenAmount" placeholder="내용을 입력해주세요." />
        <PaymentButton onClick={e => ThirdDeliveryFormSendMessage(e)}>결제하기</PaymentButton>
      </FormContentContainer>
    </FormLayout>
  );
}

export default SecondDeliveryForm;
