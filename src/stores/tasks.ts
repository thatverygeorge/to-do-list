import { nanoid } from 'nanoid';
import { atom, computed } from 'nanostores';
import { ITask } from '../types';
import { resetCountFilter } from './countFilter';
import { setToast } from './toast';

function getLocalStorageTasks(): ITask[] {
  return JSON.parse(localStorage.getItem('tasks') as string) ?? [];
}

export const tasks = atom<ITask[]>(getLocalStorageTasks());

function setLocalStorageTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks.get()));
}

tasks.listen(() => setLocalStorageTasks());

export function addTask(text: string, type: string) {
  const newTask = {
    id: nanoid(),
    text,
    type,
    isDone: false,
  };

  tasks.set([newTask, ...tasks.get()]);
}

export function deleteTask(id: string) {
  const index = tasks.get().findIndex((task) => task.id === id);
  const newState = tasks.get();
  newState.splice(index, 1);

  tasks.set(newState);
}

interface IOptions {
  text?: string;
  type?: string;
  isDone?: boolean;
}

export function editTask(id: string, options: IOptions) {
  if (options.text === '') {
    deleteTask(id);
    return;
  }

  const index = tasks.get().findIndex((task) => task.id === id);
  const newTask = Object.assign(tasks.get()[index], options);
  const newState = tasks.get();
  newState[index] = newTask;

  tasks.set(newState);
}

export function upload(file: File) {
  const fileName = file.name.toLowerCase();

  const isValidFile = fileName.endsWith('json');

  if (isValidFile) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      let toastMessage = '';

      try {
        const uploadedTasks = JSON.parse(reader.result as string);
        const uploadedIDs = uploadedTasks.map((task: ITask) => task.id);
        const tasksSinceLastSave = tasks.get().filter((task) => !uploadedIDs.includes(task.id));
        tasks.set([...uploadedTasks, ...tasksSinceLastSave]);
        resetCountFilter();

        toastMessage = 'Success: your tasks were uploaded';
      } catch (e) {
        toastMessage = 'Error: your JSON file is invalid';
      }

      setToast({
        message: toastMessage,
        isVisible: true,
      });
    });

    reader.addEventListener('error', () => {
      setToast({
        message: 'Something wrong happened. Try again later.',
        isVisible: true,
      });
    });

    reader.readAsText(file);
  } else {
    setToast({
      message: 'Error: upload a JSON file',
      isVisible: true,
    });
  }
}
