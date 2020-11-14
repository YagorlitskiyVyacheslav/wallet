import React from "react";
import styles from "./HomeTable.module.css";

const HomeTableList = ({ data }) => {
  let date = new Date(data.date);
  date =
    date.getDate() +
    "." +
    ((date.getMonth() + 1).length === 2
      ? date.getMonth() + 1
      : 0 + date.getMonth() + 1) +
    "." +
    `${date.getFullYear()}`.slice(-2);

  return (
    <li
      key={data._id}
      className={
        data.type === "+"
          ? `${styles.financeMobItem} ${styles.financeMobItemIncome}`
          : `${styles.financeMobItem} ${styles.financeMobItemSpending}`
      }>
      <div className={styles.financeMobRow}>
        <p className={styles.financeMobTitle}>Дата</p>
        <span className={styles.financeMobDate}>{date}</span>
      </div>
      <div className={styles.financeMobRow}>
        <p className={styles.financeMobTitle}>Тип</p>
        <span className={styles.financeMobDate}>{data.type}</span>
      </div>
      <div className={styles.financeMobRow}>
        <p className={styles.financeMobTitle}>Категория</p>
        <span className={styles.financeMobDate}>{data.category}</span>
      </div>
      <div className={styles.financeMobRow}>
        <p className={styles.financeMobTitle}>Комментарии</p>
        <span className={styles.financeMobDate}>{data.comments}</span>
      </div>
      <div className={styles.financeMobRow}>
        <p className={styles.financeMobTitle}>Сумма</p>
        <span
          className={
            data.type === "+"
              ? `${styles.financeMobDate} ${styles.tdIncome}`
              : `${styles.financeMobDate} ${styles.tdSpending}`
          }>
          {data.amount}
        </span>
      </div>
      <div className={styles.financeMobRow}>
        <div className={styles.financeMobTitle}>Баланс</div>
        <span className={styles.financeMobDate}>{data.balanceAfter}</span>
      </div>
    </li>
  );
};

export default HomeTableList;
