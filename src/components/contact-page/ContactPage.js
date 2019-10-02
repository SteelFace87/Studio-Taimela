import React from 'react';
import styles from './ContactPage.css';
import { aboutVirpi } from '../../text/contact';
import Title from '../title/Title';
import ContactOptions from './ContactOptions';
import RenderParagraph from '../render-paragraph/RenderPagragraph';

export default function ContactPage() {
  return (
    <section id="Contact" className={[styles.section, 'page'].join(' ')}>
      <Title title="get in contact" />
      <ContactOptions />
      <RenderParagraph content={aboutVirpi} />
    </section>
  );
}
