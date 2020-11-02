import React from "react";
import styles from "./Button.module.css";

const Button = ({ onToggle }) => (
  <button className={styles.buttonOpenModal} type="button" onClick={onToggle}>
    +
  </button>
);

export default Button;
