import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={onClose} />
      <div id="modal-content">
        {children}
      </div>
    </div>,
    modalNode
  );
}

export function LoginModal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={onClose} />
      <div id="modal-content">
        {children}
      </div>
    </div>,
    modalNode
  );
}

export function SignupModal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={onClose} />
      <div id="modal-content">
        {children}
      </div>
    </div>,
    modalNode
  );
}

export function AnEditPinModal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="edit-pin-modal">
      <div id="edit-pin-modal-background" onClick={onClose} />
      <div id="edit-pin-modal-content">
        {children}
      </div>
    </div>,
    modalNode
  );
}

export function ADeletePinModal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="delete-pin-modal">
      <div id="delete-pin-modal-background" onClick={onClose} />
      <div id="delete-pin-modal-content">
        {children}
      </div>
    </div>,
    modalNode
  );
}

export function ACreateCommentModal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="create-comment-modal">
      <div id="create-comment-background" onClick={onClose} />
      <div id="create-comment-content">
        {children}
      </div>
    </div>,
    modalNode
  );
}

export function AnEditCommentModal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="edit-comment-modal">
      <div id="edit-comment-background" onClick={onClose} />
      <div id="edit-comment-content">
        {children}
      </div>
    </div>,
    modalNode
  );
}

export function ADeleteCommentModal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="delete-comment-modal">
      <div id="delete-comment-background" onClick={onClose} />
      <div id="delete-comment-content">
        {children}
      </div>
    </div>,
    modalNode
  );
}

