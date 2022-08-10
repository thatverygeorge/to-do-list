import React, { ChangeEvent, useId } from 'react';
import { IDonenessType } from '../types';

interface IDonenessSelectorProps {
  modifier: string;
  types: IDonenessType[];
  defaultType: IDonenessType;
  onChange: (value: string) => void;
}

function DonenessSelector(props: IDonenessSelectorProps) {
  const { modifier, types, defaultType, onChange } = props;

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    onChange(evt.target.value);
  }

  return (
    <section className={`doneness-selector ${modifier}__doneness-selector`}>
      {types.map((type) => {
        const id = useId();

        return (
          <React.Fragment key={type.label}>
            <input
              className="input input-doneness doneness-selector__input visually-hidden"
              type="radio"
              name={`doneness--${modifier}`}
              id={id}
              value={type.label}
              autoComplete="off"
              defaultChecked={type.value === defaultType.value}
              onChange={handleChange}
            />
            <label className="button button-doneness doneness-selector__button" htmlFor={id}>
              {type.label}
            </label>
          </React.Fragment>
        );
      })}
    </section>
  );
}

export default DonenessSelector;
