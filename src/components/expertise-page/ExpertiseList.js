import React from 'react';
import styles from './ExpertiseList.css';
import { expertise } from '../../text/expertise';

export default function ExpertiseList() {
  const expertiseList = expertise.map((expertiseItem, i) => (
    <li key={i}>
      <section className={styles.li}>
        {expertiseItem.icon}
        <ul className={styles.iconUl}>
          {expertiseItem.text.map((text, textIndex) => (
            <li key={textIndex}>{text}</li>
          ))}
        </ul>
      </section>
    </li>
  ));
  return <ul className={styles.ul}>{expertiseList}</ul>;
}
