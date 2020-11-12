import React from "react";
import styles from "./OpenModalButton.module.css";

const OpenModalButton = ({ onToggle }) => (
  <button className={styles.buttonOpenModal} type="button" onClick={onToggle}>
    +
  </button>
);

export default OpenModalButton;
