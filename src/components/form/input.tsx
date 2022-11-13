import React, { ChangeEventHandler, useRef } from 'react';

function Input({
  accept, defaultValue, disabled, hint, helperText, label, name, onChange, max,
  messages, min, pattern, required, step, type, value,
} : Props) {
  const field = useRef<HTMLInputElement>(null);

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
      { helperText !== undefined && (
        <span className="helper-text">{helperText}</span>
      )}
      <input
        accept={accept}
        defaultValue={defaultValue}
        disabled={disabled}
        max={max}
        min={min}
        name={name}
        onChange={onChange}
        onInput={onInput}
        onInvalid={isInvalid}
        pattern={pattern}
        readOnly={onChange !== undefined && value !== undefined}
        ref={field}
        required={required}
        step={step}
        type={type}
        value={value}
      />
      { hint !== undefined && (
        <span className="hint">{hint}</span>
      )}
    </label>
  );
}

type Props = {
  accept?: string;
  defaultValue?: number | string,
  disabled?: boolean,
  helperText?: string,
  hint?: string,
  label: string,
  max?: number,
  messages?: {
    patternMismatch?: string,
    tooLong?: string,
    valueMissing?: string,
  },
  min?: number,
  name: string,
  onChange?: ChangeEventHandler,
  pattern?: string,
  required?: boolean,
  step?: number,
  type?: 'color' | 'datetime-local' | 'file' | 'number' | 'password' | 'text',
  value?: string,
};

Input.defaultProps = {
  accept: undefined,
  defaultValue: undefined,
  disabled: false,
  helperText: undefined,
  hint: undefined,
  max: undefined,
  messages: {},
  min: undefined,
  onChange: undefined,
  pattern: undefined,
  required: false,
  step: undefined,
  type: 'text',
  value: undefined,
};

export default Input;
