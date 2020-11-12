import React from "react";
import styles from "../NavSection/NavSection.module.css";

const Balance = ({ balance }) => (
  <div className={styles.balanceContainer}>
    <p className={styles.balanceTitle}>Balance, UAN</p>
    <p className={styles.balanceSum}>{balance}</p>
  </div>
);

export default Balance;
