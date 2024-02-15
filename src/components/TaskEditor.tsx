import { FocusEvent } from "react";
import TypeSelector from "./TypeSelector";

interface ITaskEditorProps {
  modifier: string;
  types: string[];
  defaultType: string;
  defaultValue?: string;
  autoFocus?: boolean;
}

function TaskEditor(props: ITaskEditorProps) {
  const { modifier, types, defaultType, defaultValue = "", autoFocus = false } = props;

  function handleAutoFocus(evt: FocusEvent<HTMLTextAreaElement>) {
    const { target } = evt;

    if (autoFocus) {
      target.setSelectionRange(target.value.length, target.value.length);
    }
  }

  return (
    <>
      <textarea
        className={`input input-task ${modifier}__input-task`}
        name="task"
        rows={4}
        placeholder="enter task"
        defaultValue={defaultValue}
        autoComplete="off"
        required
        autoFocus={autoFocus}
        onFocus={handleAutoFocus}
      />

      <TypeSelector modifier={modifier} types={types} defaultType={defaultType} />
    </>
  );
}

export default TaskEditor;

