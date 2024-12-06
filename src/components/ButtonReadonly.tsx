import { useStore } from "@nanostores/react";
import { isReadonly as isReadonlyStore, toggleIsReadonly } from "../stores/isReadonly";

interface IButtonReadonlyProps {
  modifier: string;
}

function ButtonReadonly(props: IButtonReadonlyProps) {
  const isReadonly = useStore(isReadonlyStore);

  return (
    <div>
      <input
        className="input readonly__input visually-hidden"
        type="checkbox"
        id="readonly"
        autoComplete="off"
        onChange={toggleIsReadonly}
      />
      <label className="button button-readonly readonly__button" htmlFor="readonly">
        readonly
      </label>
      <span className="visually-hidden" role="status" aria-live="polite">
        {isReadonly ? "read-only is on" : "read-only is off"}
      </span>
    </div>
  );
}

export default ButtonReadonly;

