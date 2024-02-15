import { useStore } from "@nanostores/react";
import { useId, useRef, useState } from "react";
import { TaskTypes } from "../const";
import {
  editingTaskID as editingTaskIDStore,
  resetEditingTaskID,
  setEditingTaskID,
} from "../stores/editingTaskID";
import { isReadonly as isReadonlyStore } from "../stores/isReadonly";
import { deleteTask, editTask } from "../stores/tasks";
import { ITask } from "../types";
import TaskEditor from "./TaskEditor";

interface ITaskProps {
  task: ITask;
}

const taskTypes = Object.values(TaskTypes).filter((type) => type !== TaskTypes.ALL);

function Task(props: ITaskProps) {
  const { task } = props;
  const [isEditing, setIsEditing] = useState(false);

  const editingTaskID = useStore(editingTaskIDStore);
  const isReadonly = useStore(isReadonlyStore);
  const id = useId();

  const taskRef = useRef<HTMLElement>(null);

  function handleEdit() {
    if (isEditing) {
      const textInput = taskRef.current!.querySelector(".input-task") as HTMLTextAreaElement;
      const typeInput = taskRef.current!.querySelector(".input-type:checked") as HTMLInputElement;

      if (textInput.value !== task.text || typeInput.value !== task.type) {
        editTask(task.id, { text: textInput.value, type: typeInput.value });
      }

      setIsEditing(!isEditing);
      resetEditingTaskID();
    } else {
      setIsEditing(!isEditing);
      setEditingTaskID(task.id);
    }
  }

  function handleDone() {
    editTask(task.id, { isDone: !task.isDone });
  }

  function handleDelete() {
    deleteTask(task.id);

    if (isEditing) {
      resetEditingTaskID();
    }
  }

  return (
    <li className={`task-item task-item--${task.type} task-list__item`}>
      <article className="task task-list__task" ref={taskRef}>
        {isEditing ? (
          <TaskEditor
            modifier="task"
            types={taskTypes}
            defaultType={task.type}
            defaultValue={task.text}
            autoFocus={true}
          />
        ) : (
          <pre className={`task__text task-text ${task.isDone ? "task-text--done" : ""}`.trim()}>
            {task.text}
          </pre>
        )}

        <button
          className="button task__button-edit"
          type="button"
          disabled={isReadonly || (editingTaskID !== null && editingTaskID !== task.id)}
          onClick={handleEdit}
        >
          {isEditing ? "save" : "edit"}
        </button>

        <input
          className="input task__input-doneness visually-hidden"
          type="checkbox"
          name="done"
          id={id}
          defaultChecked={task.isDone}
          autoComplete="off"
          disabled={isReadonly}
          onChange={handleDone}
        />
        <label className="button task__button-doneness" htmlFor={id}>
          {task.isDone ? "undo" : "done"}
        </label>

        <button
          className="button task__button-delete"
          type="button"
          disabled={isReadonly}
          onClick={handleDelete}
        >
          delete
        </button>
      </article>
    </li>
  );
}

export default Task;

