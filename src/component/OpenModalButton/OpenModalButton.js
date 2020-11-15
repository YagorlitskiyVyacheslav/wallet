import React from 'react';
import PropTypes from 'prop-types';
import styles from './OpenModalButton.module.css';

const OpenModalButton = ({ onToggle }) => (
  <div className={styles.buttonOverlay}>
  <button className={styles.buttonOpenModal} type="button" onClick={onToggle}>
    +
  </button>
  </div>
);

OpenModalButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default OpenModalButton;
