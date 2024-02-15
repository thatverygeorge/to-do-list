import { atom } from 'nanostores';

const INITIAL_STATE = null;

export const editingTaskID = atom<string | null>(INITIAL_STATE);

export function setEditingTaskID(id: string) {
  editingTaskID.set(id);
}

export function resetEditingTaskID() {
  editingTaskID.set(null);
}
