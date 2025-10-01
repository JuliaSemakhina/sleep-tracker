import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ show, onClose, children }) => {

  const variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  const transition = {
    duration: 0.35,
    ease: 'linear'
  };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className="modal-overlay"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={transition}
        >
          <motion.div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
          </motion.div>
          <AiFillCloseCircle className='close_btn' onClick={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;