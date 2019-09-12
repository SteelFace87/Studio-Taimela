import React from 'react';
import { FaEnvelopeOpenText, FaMapMarked, FaPhone } from 'react-icons/fa';
import styles from './Contact.css';
import { about } from '../../text/contact';
import Title from '../title/Title';

export default function Contact() {
  const contact = [
    {
      icon: <FaEnvelopeOpenText size={32} />,
      text: 'Virpi@studiotaimela.com',
    },
    {
      icon: <FaMapMarked size={32} />,
      text: (
        <>
          <span>Zürich</span>
          <span>Switzerland</span>
        </>
      ),
    },
    {
      icon: <FaPhone size={32} />,
      text: (
        <>
          <span>+41 77 979 9734</span>
          <span> +358 40 410 6428</span>
        </>
      ),
    },
  ];

  const contactList = contact.map((contactItem, i) => (
    <li className={styles.li} key={i}>
      <p className={styles.logo}>{contactItem.icon}</p>
      <p>{contactItem.text}</p>
    </li>
  ));
  return (
    <section id="Contact" className={[styles.section, 'page'].join(' ')}>
      <Title title=" get in contact" />
      <ul className={styles.ul}>{contactList}</ul>
      <p className={styles.paragraph}>{about}</p>
    </section>
  );
}
