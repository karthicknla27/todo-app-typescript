import React from 'react';

interface ModalProps {
  isOpen: boolean;
  message: string;

  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose,message }) => {
  return (
    <dialog className={`modal ${isOpen ? 'open' : ''}`}>
      <article>
        <header>
          <a href="#close" aria-label="Close" className="close" onClick={onClose}></a>
          Success
        </header>
        <p>{message}</p>
      </article>
    </dialog>
  );
};

export default Modal;
