import React from 'react';
import styles from './Subsection.css';
import PropTypes from 'prop-types';

export default function SubSection({ title }){

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
    </section>
  );
}

SubSection.propTypes = {
  title: PropTypes.string.isRequired
};
