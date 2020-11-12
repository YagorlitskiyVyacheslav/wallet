import React from "react";
import HomeTableList from "./HomeTableList";
import styles from "./HomeTable.module.css";

const HomeTable = ({ finance }) => {
  return (
    <div className={styles.financeMobWrapper}>
      <ul className={styles.financeMobList}>
        {finance.map((data) => (
          <HomeTableList data={data} />
        ))}
      </ul>
    </div>
  );
};

export default HomeTable;
