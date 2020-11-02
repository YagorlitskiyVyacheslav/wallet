import React from 'react';
import Loader from 'react-loader-spinner';
import styles from '../globalStyles.module.css'

const Spiner = () => {
    return (
      <>
        <div className={styles.loaderLayout}>
          <Loader
            type="Bars"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      </>
    );
}

export default Spiner;