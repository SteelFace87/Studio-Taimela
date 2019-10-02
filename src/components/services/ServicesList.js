import React from 'react';
import styles from './ServicesList.css';
import { services } from '../../text/services';

export default function ServicesList() {
  const servicesList = services.map((content, i) => (
    <li className={styles.li} key={i}>
      <>
        <h2>{content.title}</h2>
        <p className={styles.devider}>~</p>
        <p>{content.content}</p>
      </>
    </li>
  ));
  return <ul className={styles.servicesList}>{servicesList}</ul>;
}
