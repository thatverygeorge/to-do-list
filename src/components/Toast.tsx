import ReactDOM from 'react-dom';
import { MouseEvent, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { toast as toastStore, setToastVisibility } from '../stores/toast';

function Toast() {
  const toast = useStore(toastStore);
  const buttonCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let timerID: number;

    if (toast.isVisible) {
      timerID = setTimeout(() => {
        setToastVisibility(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timerID);
    };
  });

  function handleEscapeKeydown(evt: KeyboardEvent) {
    if (evt.key === 'Escape') {
      setToastVisibility(false);
    }
  }

  function handleTabKeydown(evt: KeyboardEvent) {
    if (evt.key === 'Tab' && buttonCloseRef.current) {
      evt.preventDefault();
      buttonCloseRef.current.focus();
    }
  }

  function handleShiftTabKeydown(evt: KeyboardEvent) {
    if (evt.key === 'Tab' && evt.shiftKey && buttonCloseRef.current) {
      evt.preventDefault();
      buttonCloseRef.current.focus();
    }
  }

  useEffect(() => {
    if (toast.isVisible) {
      window.addEventListener('keydown', handleEscapeKeydown);
      window.addEventListener('keydown', handleTabKeydown);
      window.addEventListener('keydown', handleShiftTabKeydown);
    }

    return () => {
      window.removeEventListener('keydown', handleEscapeKeydown);
      window.removeEventListener('keydown', handleTabKeydown);
      window.removeEventListener('keydown', handleShiftTabKeydown);
    };
  });

  function handleOverlayClick(evt: MouseEvent) {
    const target = evt.target as HTMLDivElement;
    if (target.matches('.toast')) {
      setToastVisibility(false);
    }
  }

  function handleButtonCloseClick() {
    setToastVisibility(false);
  }

  if (!toast.isVisible) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className="toast" onClick={handleOverlayClick}>
        <div className="toast__wrapper">
          <p className="toast__message">{toast.message}</p>
          <button
            ref={buttonCloseRef}
            className="toast__button-close"
            type="button"
            aria-label="close toast"
            onClick={handleButtonCloseClick}
            autoFocus
          />
        </div>
      </div>
    </>,
    document.querySelector('#portal') as HTMLElement
  );
}

export default Toast;
