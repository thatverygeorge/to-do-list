import { atom } from 'nanostores';
import { TaskTypes } from '../const';
import { resetCountFilter } from './countFilter';

const INITIAL_STATE = TaskTypes.ALL;

export const typeFilter = atom<string>(INITIAL_STATE);

typeFilter.listen(() => {
  resetCountFilter();
});

export function setTypeFilter(value: string) {
  typeFilter.set(value);
}

export function resetTypeFilter() {
  typeFilter.set(INITIAL_STATE);
}
