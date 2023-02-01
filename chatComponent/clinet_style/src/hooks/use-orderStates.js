import {useRecoilState, useRecoilValue} from 'recoil';
import {
  giftCardState, paymenAmountState, paymentAmountState,
  receiveUserAddressState,
  receiveUserPhoneState,
  receiveUserState,
  sendUserPhoneState,
  sendUserState
} from "../state/chat";

export const useOrderStates = () => {
  return {
    sendUser: useRecoilValue(sendUserState),
    sendUserPhone: useRecoilValue(sendUserPhoneState),
    receiveUser: useRecoilValue(receiveUserState),
    receiveUserPhone: useRecoilValue(receiveUserPhoneState),
    receiveUserAddress: useRecoilValue(receiveUserAddressState),
    giftCard: useRecoilValue(giftCardState),
    paymentAmount: useRecoilValue(paymenAmountState),
  };
};