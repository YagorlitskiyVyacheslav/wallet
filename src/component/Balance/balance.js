import React from 'react';
import styles from '../NavSection/NavSection.module.css';


export default function Balance() {
    return (
      <div className={styles.balanceContainer}>
        <p className={styles.balanceTitle}>Balance</p>
        <p className={styles.balanceSum}>100000.00 UAN</p>
      </div>
    );
}