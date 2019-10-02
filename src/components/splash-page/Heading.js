import React from 'react';
import { headingLines } from '../../text/splashPage';
import styles from './Heading.css';

export default function Heading() {
  const heading = headingLines.map((line, i) => (
    <li key={i}>
      <p>{line}</p>
    </li>
  ));
  return <ul className={styles.heading}>{heading}</ul>;
}
