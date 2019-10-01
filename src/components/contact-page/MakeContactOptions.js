import React from 'react';
import styles from './Contact.css';

export default function MakeContactOptions({ contactOptions }) {
  const contact = contactOptions.map((contactOption, i) => (
    <li className={styles.li} key={i}>
      <p className={styles.logo}>{contactOption.icon}</p>
      <p>{contactOption.text}</p>
    </li>
  ));
  return contact;
}
