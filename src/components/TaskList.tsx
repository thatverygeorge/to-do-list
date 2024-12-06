import { useStore } from "@nanostores/react";
import { filteredTasks as filteredTasksStore } from "../stores/filteredTasks";
import { countFilter as countFilterStore } from "../stores/countFilter";
import ButtonShowMore from "./ButtonShowMore";
import Task from "./Task";

interface ITaskListProps {
  modifier: string;
}

function TaskList(props: ITaskListProps) {
  const { modifier } = props;

  const filteredTasks = useStore(filteredTasksStore);
  const countFilter = useStore(countFilterStore);

  if (filteredTasks.length === 0) {
    return (
      <section className={`tasks ${modifier}__tasks`}>
        <p className="tasks__not-found container">no tasks to show</p>
      </section>
    );
  }

  return (
    <section className={`tasks ${modifier}__tasks`}>
      <ul className={`task-list tasks__list`}>
        {filteredTasks.slice(0, countFilter).map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </ul>

      {filteredTasks.length > countFilter ? <ButtonShowMore modifier="tasks" /> : ""}
    </section>
  );
}

export default TaskList;

