import { atom } from 'nanostores';

const INITIAL_COUNT = 4;
const COUNT_STEP = 4;

export const countFilter = atom<number>(INITIAL_COUNT);

export function showMore() {
  countFilter.set(countFilter.get() + COUNT_STEP);
}

export function resetCountFilter() {
  countFilter.set(INITIAL_COUNT);
}
