import {atom} from "recoil";

export const nameState = atom({
  key: 'nameState',
  default: '',
});

export const roomState = atom({
  key: 'roomState',
  default: '',
});

export const messageState = atom({
  key: 'messageState',
  default: '',
});

export const isFormActiveState = atom({
  key: 'isFormActiveState',
  default: false,
});


