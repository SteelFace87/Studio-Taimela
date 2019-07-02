import React from 'react';
import styles from './Contact.css';

export default function Contact(){

  const contact = [
    {
      text: 'Virpi@studiotaimela.com'
    },
    {
      text: 'Grosswiesenstrasse 145 \n 8051 Zurich \n Switzerland'
    },
    {
      text: '+41 77 979 9734 \n +358 40 410 6428'
    }
  ];

  const contactList = contact.map((contact, i)=>{
    return <li className={styles.li} key={i}><p>{contact.text}</p></li>;
  });
  return (
    <section className={styles.section}>
      <ul className={styles.ul}>
        {contactList}
      </ul>

    </section>
  );
}
