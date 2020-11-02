import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ onToggle, children }) => (
  <div
    className={styles.overlay}
    onClick={(e) => {
      if (e.target === e.currentTarget) {
        onToggle();
      }
    }}
  >
    <div className={styles.modal}>{children}</div>
  </div>
);

export default Modal;
