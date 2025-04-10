import { createPortal } from "react-dom";
import { motion } from "motion/react";

export const Backdrop = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    />
  );
};

const Modal = ({ children, onClose, title, closeBtn, type }) => {
  const dropIn = {
    hidden: {
      y: "-5vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
  };

  const headerClasses = type ? `modal-header ${type}` : `modal-header`;
  return createPortal(
    <>
      <Backdrop onClose={onClose} />
      <motion.dialog
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        className="modal-popup"
      >
        <header className={headerClasses}>
          <h3 className="fs-4 fw-bold text-light mb-0">{title}</h3>
          {closeBtn && <i className="fas fa-xmark" onClick={onClose} />}
        </header>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal-wrapper")
  );
};

export default Modal;
