import React from "react";
import styles from "./HomeTable.module.css";

const HomeTable = ({ finance }) => {
  let date;

  return (
    <>
      <div className={styles.financeMobWrapper}>
        <ul className={styles.financeMobList}>
          {finance.map((data) => (
            //  TODO: to HomeTableItem component
            <li
              key={data._id}
              className={
                data.type === "+"
                  ? `${styles.financeMobItem} ${styles.financeMobItemIncome}`
                  : `${styles.financeMobItem} ${styles.financeMobItemSpending}`
              }
            >
              <div className={styles.financeMobRow}>
                <p className={styles.financeMobTitle}>Дата</p>
                <span className={styles.financeMobDate}>
                  {
                    ((date = new Date(data.date)),
                    `${date.getDate()}.` +
                      (0 + `${date.getMonth() + 1}.`) +
                      `${date.getFullYear()}`.slice(-2))
                  }
                </span>
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
                  }
                >
                  {data.amount}
                </span>
              </div>
              <div className={styles.financeMobRow}>
                <div className={styles.financeMobTitle}>Баланс</div>
                <span className={styles.financeMobDate}>
                  {data.balanceAfter}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomeTable;
