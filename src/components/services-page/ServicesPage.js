import React from 'react';
import styles from './Services.css';
import Title from '../title/Title';
import ContentDevider from '../content-devider/ContentDevider';
import ServicesList from './ServicesList';
import AboutVirpi from './AboutVirpi';

export default function Services() {
  return (
    <>
      <main
        id="Services"
        className={[styles.servicesPage, 'servicesPage'].join(' ')}
      >
        <Title title="services" />
        <ServicesList />
        <AboutVirpi />
      </main>
      <ContentDevider />
    </>
  );
}
