// Modal.js
import React from 'react';
import '../styles/modal.css';

const Modal = ({ isOpen, close, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-modal" onClick={close}>X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
