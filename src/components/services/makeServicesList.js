import React from 'react';
import styles from './Services.css';

export function makeServicesList(services) {
  const servicesList = services.map((content, i) => (
    <li className={styles.li} key={i}>
      <>
        <h2>{content.title}</h2>
        <p className={styles.devider}>~</p>
        <p>{content.content}</p>
      </>
    </li>
  ));

  return servicesList;
}
