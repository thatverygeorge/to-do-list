import { ITask } from './types';

function getLocalStorageTasks(): ITask[] {
  return JSON.parse(localStorage.getItem('tasks') as string) ?? [];
}

function setLocalStorageTasks(tasks: ITask[]) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export { getLocalStorageTasks, setLocalStorageTasks };
