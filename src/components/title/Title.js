import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.css';

export default function Title({ title }) {
  return <h1 className={styles.title}>{title}</h1>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
