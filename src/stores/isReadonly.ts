import { atom } from 'nanostores';

const INITIAL_STATE = false;

export const isReadonly = atom<boolean>(INITIAL_STATE);

export function toggleIsReadonly() {
  isReadonly.set(!isReadonly.get());
}
