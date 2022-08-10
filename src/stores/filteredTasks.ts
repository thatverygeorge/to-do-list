import { computed } from 'nanostores';
import { tasks as tasksStore } from './tasks';
import { searchFilter as searchFilterStore } from './searchFilter';
import { typeFilter as typeFilterStore } from './typeFilter';
import { donenessFilter as donenessFilterStore } from './donenessFilter';
import { DonenessTypes, TaskTypes } from '../const';

export const filteredTasks = computed(
  [tasksStore, searchFilterStore, typeFilterStore, donenessFilterStore],
  (tasks, searchFilter, typeFilter, donenessFilter) => {
    const filteredTasks = tasks.filter((task) => {
      const doesSearchMatch = searchFilter === '' ? true : task.text.includes(searchFilter);
      const doesTypeMatch = typeFilter === TaskTypes.ALL ? true : task.type === typeFilter;
      const doesDonenessMatch =
        donenessFilter.value === DonenessTypes.ALL.value
          ? true
          : task.isDone === donenessFilter.value;

      return doesSearchMatch && doesTypeMatch && doesDonenessMatch;
    });

    return filteredTasks;
  }
);
