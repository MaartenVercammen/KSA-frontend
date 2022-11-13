import React, { SyntheticEvent, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import XMark from '../../icons/xmark.svg';

import styles from './toast.module.css';

const TOAST_TIME_MS = 5000 as const;
let removeContainer = false;

export interface ToastProperties {
  timer?: number;
  label: string;
  variant: string;
}

const TOAST_CONTAINER_ID = 'toast' as const;

const hideToast = (documentId: string = TOAST_CONTAINER_ID) => {
  if (removeContainer) {
    document.body.removeChild(
      document.getElementById(documentId) as Element,
    );
  } else {
    ReactDOM.unmountComponentAtNode(
      document.getElementById(documentId) as Element,
    );
  }
};

const ToastManager: React.FC<ToastProperties> = function Toast({ label, timer, variant }) {
  const toast = useRef<HTMLOutputElement>(null);
  let timerId: number = -1;

  const onReset = () => {
    window.clearTimeout(timerId);
  };

  const onStart = () => {
    timerId = window.setTimeout(hideToast, timer);
  };

  const onClose = (event: SyntheticEvent | null) => {
    if (event) event.preventDefault();
    hideToast();
  };

  useEffect(() => {
    onStart();
    toast.current?.focus();

    return () => {
      onClose(null);
    };
  });

  return (
    <output
      aria-labelledby="toast-label"
      onMouseLeave={onStart}
      onMouseEnter={onReset}
      className={styles.toast}
      ref={toast}
      data-variant={variant}
    >
      <p id="toast-label">
        {label}
      </p>
      <button type="button" onClick={onClose} aria-label="Close dialog" className="modal-close no-button">
        <XMark />
      </button>
    </output>
  );
};

const showToast = (
  { label, timer, variant }: ToastProperties,
  documentId: string = TOAST_CONTAINER_ID,
) => {
  let container = document.getElementById(documentId) as Element;

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', documentId);
    document.body.appendChild(container);
    removeContainer = true;
  }

  ReactDOM.render(
    <ToastManager label={label} timer={timer} variant={variant} />,
    container,
  );
};

ToastManager.defaultProps = {
  timer: TOAST_TIME_MS,
};

export default { showToast };
