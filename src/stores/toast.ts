import { map } from 'nanostores';

interface IToastState {
  message: string;
  isVisible: boolean;
}

const INITIAL_STATE = {
  message: '',
  isVisible: false,
};

export const toast = map<IToastState>(INITIAL_STATE);

export function setToast(options: IToastState) {
  toast.set(options);
}

export function setToastVisibility(isVisible: boolean) {
  toast.setKey('isVisible', isVisible);
}
