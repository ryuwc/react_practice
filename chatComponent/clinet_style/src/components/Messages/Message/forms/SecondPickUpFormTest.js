import React from "react";
import {useRecoilState} from "recoil";
import {giftCardState, paymenAmountState, sendUserPhoneState, sendUserState} from "../../../../state/chat";
import {ThirdPickUpFormSendMessage} from "../../../../util/chat";
import {
  ErrorMessage,
  FormContent,
  FormHeaderContainer,
  FormWrapper, GiftMessageInput, InputCounter,
  InputCounterContainer,
  InputLabel, MarginBottom16TextInput, SubmitPaymentButton,
  TextInput
} from "./SecondDeliveryFormStyle";
import useInputValidate from "../../../../hooks/use-inputValidate";

function SecondPickUpForm() {
  const [sendUser, setSendUser] = useRecoilState(sendUserState);
  const [sendUserPhone, setSendUserPhone] = useRecoilState(sendUserPhoneState);
  const [giftCard, setGiftCard] = useRecoilState(giftCardState);
  const [paymentAmount, setPaymentAmount] = useRecoilState(paymenAmountState);

  const phoneValidate = (target) => {
    target.value = target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");
    setSendUserPhone(target.value);
  };

  const isNotEmpty = (value) => value.trim() !== "";
  const {
    // 다른데서 value필요 없으면 지우면 됨
    value: VsendUser,
    hasError: VsendUserHasError,
    valueChangeHandler: VsendUserChangeHandler,
    inputBlurHandler: VsendUserBlurHandler,
    toggleHasError: VsendUserToggleHasError,
  } = useInputValidate(isNotEmpty);

  const {
    // 다른데서 value필요 없으면 지우면 됨
    value: VsendUserPhone,
    hasError: VsendUserPhoneHasError,
    valueChangeHandler: VsendUserPhoneChangeHandler,
    inputBlurHandler: VsendUserPhoneBlurHandler,
    toggleHasError: VsendUserPhoneToggleHasError,
  } = useInputValidate(isNotEmpty);

  const {
    // 다른데서 value필요 없으면 지우면 됨
    value: VpaymenAmount,
    hasError: VpaymenAmountHasError,
    valueChangeHandler: VpaymenAmountChangeHandler,
    inputBlurHandler: VpaymenAmountBlurHandler,
    toggleHasError: VpaymenAmountToggleHasError,
  } = useInputValidate(isNotEmpty);

  const ThirdPickUpFormHandler = (e) => {
    const formData = [
      { key: 'sendUser', value: sendUser, toggleError: VsendUserToggleHasError },
      { key: 'sendUserPhone', value: sendUserPhone, toggleError: VsendUserPhoneToggleHasError },
      { key: 'paymentAmount', value: paymentAmount, toggleError: VpaymenAmountToggleHasError }
    ];

    for (const data of formData) {
      console.log(data);
      if (!isNotEmpty(data.value)) {
        data.toggleError();
        return;
      }
    }

  };

  return (
    <FormWrapper>
      <FormHeaderContainer>픽업 주문</FormHeaderContainer>
      <FormContent>
        <InputLabel htmlFor="sendUser">보내는 분</InputLabel>
        <TextInput
          type="text"
          id="sendUser"
          placeholder="내용을 입력해주세요."
          onChange={(e) => {
            setSendUser(e.target.value)
            VsendUserChangeHandler(e)
          }}
          onBlur={VsendUserBlurHandler}
          HasError={VsendUserHasError}
        />
        <InputCounterContainer>
          {VsendUserHasError && (
            <ErrorMessage>보내는 분을 입력해주세요.</ErrorMessage>
          )}
          <InputCounter>{sendUser.length}/25자</InputCounter>
        </InputCounterContainer>
        <InputLabel htmlFor="sendUserPhone">보내는 분 전화번호</InputLabel>
        <MarginBottom16TextInput
          type="text"
          id="sendUserPhone"
          maxLength="13"
          placeholder="- 없이 입력해주세요."
          onChange={(e) => {
            phoneValidate(e.target)
            VsendUserPhoneChangeHandler(e)
          }}
          onBlur={VsendUserPhoneBlurHandler}
          HasError={VsendUserPhoneHasError}
        />
        {VsendUserPhoneHasError && (
          <ErrorMessage>전화번호를 입력해주세요.</ErrorMessage>
        )}
        <InputLabel htmlFor="giftCard">선물 카드 내용</InputLabel>
        <GiftMessageInput
          id="giftCard"
          placeholder="내용을 입력해주세요."
          onChange={(e) => setGiftCard(e.target.value)}
        />
        <InputCounter>{giftCard.length}/100자</InputCounter>
        <InputLabel htmlFor="paymenAmount">결제 금액</InputLabel>
        <TextInput
          type="text"
          id="paymenAmount"
          placeholder="내용을 입력해주세요."
          onChange={(e) => {
            setPaymentAmount(e.target.value)
            VpaymenAmountChangeHandler(e)
          }}
          onBlur={VpaymenAmountBlurHandler}
          HasError={VpaymenAmountHasError}
        />
        {VpaymenAmountHasError && (
          <ErrorMessage>결제 금액을 입력해주세요.</ErrorMessage>
        )}
        <SubmitPaymentButton onClick={(e) => ThirdPickUpFormHandler(e)}>작성완료</SubmitPaymentButton>
      </FormContent>
    </FormWrapper>
  );
}

export default SecondPickUpForm;
