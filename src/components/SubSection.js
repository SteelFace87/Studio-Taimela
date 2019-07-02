import React from 'react';
import styles from './Subsection.css';

export default function SubSection({ title }){
  console.log('title', title);
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
    </section>
  );
}
