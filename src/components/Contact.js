import React from 'react';
import styles from './Contact.css';
import { about } from '../text/contact';

import {
  FaEnvelopeOpenText,
  FaMapMarked,
  FaPhone
} from 'react-icons/fa';

export default function Contact() {

  const contact = [
    {
      icon: <FaEnvelopeOpenText size='2rem' />,
      text: 'Virpi@studiotaimela.com'
    },
    {
      icon: <FaMapMarked size='2rem' />,
      text:
        <>
          <span>Grosswiesenstrasse 145</span>
          <span>8051 Zurich</span>
          <span>Switzerland</span>
        </>
    },
    {
      icon: <FaPhone size='2rem' />,
      text:
        <>
          <span>+41 77 979 9734</span>
          <span> +358 40 410 6428</span>
        </>
    }
  ];

  const contactList = contact.map((contact, i) => {
    return (
      <li className={styles.li} key={i}>
        <p>{contact.icon}</p>
        <p>{contact.text}</p>
      </li>
    );
  });
  return (
    <section className={styles.section}>
      <section className={styles.content}>
        <h1>Contact</h1>
        <ul className={styles.ul}>
          {contactList}
        </ul>
        <p>
          {about}
        </p>
      </section>
    </section>
  );
}
