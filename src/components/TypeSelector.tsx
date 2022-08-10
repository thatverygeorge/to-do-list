import React, { ChangeEvent, useId } from 'react';

interface ITypeSelectorProps {
  modifier: string;
  types: string[];
  defaultType: string;
  onChange?: (value: string) => void;
}

function TypeSelector(props: ITypeSelectorProps) {
  const { modifier, types, defaultType, onChange } = props;

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    if (onChange !== undefined) {
      onChange(evt.target.value);
    }
  }

  return (
    <section className={`type-selector ${modifier}__type-selector`}>
      {types.map((type) => {
        const id = useId();

        return (
          <React.Fragment key={type}>
            <input
              className="input input-type type-selector__input visually-hidden"
              type="radio"
              name={`type--${modifier}`}
              id={id}
              value={type}
              autoComplete="off"
              defaultChecked={type === defaultType}
              onChange={handleChange}
            />
            <label className="button button-type type-selector__button" htmlFor={id}>
              {type}
            </label>
          </React.Fragment>
        );
      })}
    </section>
  );
}

export default TypeSelector;
