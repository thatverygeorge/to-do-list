import { IAppRoutes, IDonenessTypes, ITaskTypes } from './types';

export const AppRoutes: IAppRoutes = {
  MAIN: '/',
};

export const TaskTypes: ITaskTypes = {
  ALL: 'all',
  WORK: 'work',
  LIFE: 'life',
  OTHER: 'other',
};

export const DonenessTypes: IDonenessTypes = {
  ALL: {
    label: 'all',
    value: null,
  },
  DONE: {
    label: 'done',
    value: true,
  },
  NOT_DONE: {
    label: 'not done',
    value: false,
  },
};
