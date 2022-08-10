import { useStore } from '@nanostores/react';
import { isReadonly as isReadonlyStore, toggleIsReadonly } from '../stores/isReadonly';

interface IButtonReadonlyProps {
  modifier: string;
}

function ButtonReadonly(props: IButtonReadonlyProps) {
  const { modifier } = props;

  const isReadonly = useStore(isReadonlyStore);

  return (
    <section className={`readonly ${modifier}__readonly`}>
      <input
        className="input readonly__input visually-hidden"
        type="checkbox"
        id="readonly"
        autoComplete="off"
        onChange={toggleIsReadonly}
      />
      <label className="button button-readonly readonly__button" htmlFor="readonly">
        Readonly mode
        <span className="button-readonly__status" role="status" aria-live="polite">
          {isReadonly ? ' is on' : ' is off'}
        </span>
      </label>
    </section>
  );
}

export default ButtonReadonly;
