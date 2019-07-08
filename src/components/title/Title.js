import React from 'react';
import styles from './Title.css';
import PropTypes from 'prop-types';

export default function Title({ title }){
  return (<h1 className={styles.title}>{title}</h1>);
}

Title.propTypes = {
  title:PropTypes.string.isRequired
}
;
