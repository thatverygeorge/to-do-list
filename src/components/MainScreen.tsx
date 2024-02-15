import { DonenessTypes, TaskTypes } from "../const";
import MadeBy from "./MadeBy";
import TypeSelector from "./TypeSelector";
import DonenessSelector from "./DonenessSelector";
import ButtonReadonly from "./ButtonReadonly";
import Search from "./Search";
import ButtonsSaveUpload from "./ButtonsSaveUpload";
import FormAddTask from "./FormAddTask";
import TaskList from "./TaskList";
import { useStore } from "@nanostores/react";
import { setTypeFilter } from "../stores/typeFilter";
import { setDonenessFilter } from "../stores/donenessFilter";
import { tasksLength as tasksLengthStore } from "../stores/tasks";
import Toast from "./Toast";

const taskTypes = Object.values(TaskTypes);
const donenessTypes = Object.values(DonenessTypes);

function MainScreen() {
  const tasksLength = useStore(tasksLengthStore);

  return (
    <main className="main">
      <h1 className="main__title">Just Do It!</h1>

      <div className="main__left-column">
        <FormAddTask modifier="main" />

        <ButtonsSaveUpload modifier="main" />

        <ButtonReadonly modifier="main" />
      </div>

      <TaskList modifier="main" />

      <div className="main__right-column">
        <Search modifier="main" />

        <div className="main__filter-wrapper">
          <TypeSelector
            modifier="main"
            types={taskTypes}
            defaultType={TaskTypes.ALL}
            onChange={setTypeFilter}
          />
          <DonenessSelector
            modifier="main"
            types={donenessTypes}
            defaultType={DonenessTypes.ALL}
            onChange={setDonenessFilter}
          />
        </div>
      </div>

      <MadeBy modifier="main" />

      <Toast />
    </main>
  );
}

export default MainScreen;

