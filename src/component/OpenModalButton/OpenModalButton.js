import React from 'react';
import PropTypes from 'prop-types';
import styles from './OpenModalButton.module.css';

const OpenModalButton = ({ onToggle }) => (
  <button className={styles.buttonOpenModal} type="button" onClick={onToggle}>
    +
  </button>
);

OpenModalButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default OpenModalButton;
