import React from 'react';
import { services, aboutMe } from '../../text/services';
import styles from './Services.css';
import Title from '../title/Title';
import ContentDevider from '../content-devider/ContentDevider';
import { makeServicesList } from './makeServicesList';

export default function Services() {
  return (
    <>
      <main
        id="Services"
        className={[styles.servicesPage, 'servicesPage'].join(' ')}
      >
        <Title title="services" />
        <ul className={styles.servicesList}>{makeServicesList(services)}</ul>
        <p className={styles.aboutMe}>{aboutMe}</p>
      </main>
      <ContentDevider />
    </>
  );
}
