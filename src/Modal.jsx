import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
        {/* <button className='close_btn' onClick={onClose}>x</button> */}
        <AiFillCloseCircle className='close_btn' onClick={onClose}/>
    </div>
  );
};

export default Modal;