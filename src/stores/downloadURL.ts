import { computed } from 'nanostores';
import { tasks as tasksStore } from './tasks';

export const downloadURL = computed(tasksStore, (tasks) => {
  const blob = new Blob([JSON.stringify(tasks)], {
    type: 'application/json',
  });

  const url = URL.createObjectURL(blob);

  return url;
});
