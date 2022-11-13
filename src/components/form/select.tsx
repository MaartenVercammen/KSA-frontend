import React, { ChangeEventHandler, ReactElement, useRef } from 'react';

function Select({
  children, defaultValue, disabled, label, name, onChange,
  messages, required, value,
} : Props) {
  const field = useRef<HTMLSelectElement>(null);

  const onInput = () => { field.current!.setCustomValidity(''); };

  const isInvalid = () => {
    const { validity: { tooLong, patternMismatch, valueMissing } } = field.current!;
    if (patternMismatch && messages!.patternMismatch) {
      field.current!.setCustomValidity(messages!.patternMismatch);
    } else if (tooLong && messages!.tooLong) {
      field.current!.setCustomValidity(messages!.tooLong);
    } else if (valueMissing && messages!.valueMissing) {
      field.current!.setCustomValidity(messages!.valueMissing);
    } else {
      field.current!.setCustomValidity('');
    }
  };

  return (
    <label htmlFor={name}>
      <span className={`${required ? 'required' : ''} ${disabled || (value && !onChange) ? 'disabled' : ''}`}>{label}</span>
      <select
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
        onChange={onChange}
        onInput={onInput}
        onInvalid={isInvalid}
        ref={field}
        required={required}
      >
        {children}
      </select>
    </label>
  );
}

type Props = {
  children: ReactElement<HTMLOptionElement> | ReactElement<HTMLOptionElement>[]
  defaultValue?: string,
  disabled?: boolean,
  label: string,
  messages?: {
    patternMismatch?: string,
    tooLong?: string,
    valueMissing?: string,
  },
  name: string,
  onChange?: ChangeEventHandler,
  required?: boolean,
  value?: string,
};

Select.defaultProps = {
  defaultValue: undefined,
  disabled: false,
  messages: {},
  onChange: undefined,
  required: false,
  value: undefined,
};

export default Select;
