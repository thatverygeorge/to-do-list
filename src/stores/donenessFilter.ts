import { atom } from 'nanostores';
import { resetCountFilter } from '../stores/countFilter';
import { DonenessTypes } from '../const';
import { IDonenessType } from '../types';

const INITIAL_STATE = DonenessTypes.ALL;

export const donenessFilter = atom<IDonenessType>(INITIAL_STATE);

donenessFilter.listen(() => {
  resetCountFilter();
});

export function setDonenessFilter(value: string) {
  switch (value) {
    case DonenessTypes.DONE.label:
      donenessFilter.set(DonenessTypes.DONE);
      break;
    case DonenessTypes.NOT_DONE.label:
      donenessFilter.set(DonenessTypes.NOT_DONE);
      break;
    default:
      donenessFilter.set(DonenessTypes.ALL);
      break;
  }
}

export function resetDonenessFilter() {
  donenessFilter.set(INITIAL_STATE);
}
