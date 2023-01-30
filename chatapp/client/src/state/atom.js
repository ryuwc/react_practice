import {atom} from "recoil";

export const nameState = atom({
  key: 'nameState',
  default: '',
});

export const isFormActiveState = atom({
  key: 'isFormActiveState',
  default: false,
});


