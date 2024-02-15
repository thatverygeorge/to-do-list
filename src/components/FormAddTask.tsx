import { TaskTypes } from "../const";
import TaskEditor from "./TaskEditor";
import { isReadonly as isReadonlyStore } from "../stores/isReadonly";
import { useStore } from "@nanostores/react";
import { addTask } from "../stores/tasks";
import { FormEvent } from "react";

interface IFormAddTaskProps {
  modifier: string;
}

const taskTypes = Object.values(TaskTypes).filter((type) => type !== TaskTypes.ALL);

function FormAddTask(props: IFormAddTaskProps) {
  const { modifier } = props;

  const isReadonly = useStore(isReadonlyStore);

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const formData = new FormData(form);
    const text = formData.get("task") as string;
    const type = formData.get("type--form-add-task") as string;

    addTask(text, type);

    const input = form.elements["task" as any] as HTMLInputElement;
    input.value = "";
  }

  return (
    <form className={`form-add-task ${modifier}__form-add-task`} onSubmit={handleSubmit}>
      <TaskEditor modifier="form-add-task" types={taskTypes} defaultType={TaskTypes.WORK} />

      <button className="button form-add-task__button-submit" type="submit" disabled={isReadonly}>
        add
      </button>
    </form>
  );
}

export default FormAddTask;

