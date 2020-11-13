import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ onToggle, children }) => {
  const clickHandler = (event) => {
    if (event.target === event.currentTarget) {
      onToggle();
    }
  };

  return (
    <div className={styles.overlay} onClick={clickHandler}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;
