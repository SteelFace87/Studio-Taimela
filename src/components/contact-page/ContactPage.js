import React from 'react';
import styles from './Contact.css';
import { about, contactOptions } from '../../text/contact';
import Title from '../title/Title';
import MakeContactOptions from './MakeContactOptions';

export default function ContactPage() {
  return (
    <section id="Contact" className={[styles.section, 'page'].join(' ')}>
      <Title title="get in contact" />
      <ul className={styles.ul}>
        <MakeContactOptions contactOptions={contactOptions} />
      </ul>
      <p className={styles.paragraph}>{about}</p>
    </section>
  );
}
