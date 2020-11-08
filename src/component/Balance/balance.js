import React from 'react';
import { connect } from 'react-redux';
import styles from '../NavSection/NavSection.module.css';


const Balance = ({balance}) => {
    return (
      <div className={styles.balanceContainer}>
        <p className={styles.balanceTitle}>Balance, UAN</p>
        <p className={styles.balanceSum}>{balance}</p>
      </div>
    );
}

const mapDispatchToProps = (state) => ({
  balance: state.transactions.balance
})

export default connect(mapDispatchToProps)(Balance);