import React from "react";
import HomeTableItem from "./HomeTableItem";
import styles from "./HomeTable.module.css";

const HomeTable = ({ finance }) => {
  return (
    <div className={styles.financeMobWrapper}>
      <ul className={styles.financeMobList}>
        {finance.map((data) => (
    //  TODO: to HomeTableItem component
          <HomeTableItem  key={data._id} data={data} />
        ))}
      </ul>
    </div>
  );
};

export default HomeTable;
