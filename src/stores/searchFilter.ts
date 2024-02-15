import { atom } from 'nanostores';
import { resetCountFilter } from './countFilter';

const INITIAL_STATE = '';

export const searchFilter = atom<string>(INITIAL_STATE);

searchFilter.listen(() => {
  resetCountFilter();
});

export function setSearchFilter(value: string) {
  searchFilter.set(value.trim());
}

export function resetSearchFilter() {
  searchFilter.set(INITIAL_STATE);
}
