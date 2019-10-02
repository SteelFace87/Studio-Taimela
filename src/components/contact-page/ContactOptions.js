import React from 'react';
import styles from './ContactOptions.css';
import { contactOptions } from '../../text/contact';

export default function ContactOptions() {
  const contact = contactOptions.map((contactOption, i) => (
    <li className={styles.li} key={i}>
      <p className={styles.logo}>{contactOption.icon}</p>
      <p>{contactOption.text}</p>
    </li>
  ));
  return <ul className={styles.ul}>{contact}</ul>;
}
