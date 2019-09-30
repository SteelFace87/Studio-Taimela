import React from 'react';
import styles from './Expertise.css';

export function makeExpertiseList(expertise) {
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
  return expertiseList;
}
