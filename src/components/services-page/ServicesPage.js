import React from 'react';
import styles from './Services.css';
import Title from '../title/Title';
import ContentDevider from '../content-devider/ContentDevider';
import ServicesList from './ServicesList';
import RenderParagraph from '../render-paragraph/RenderPagragraph';
import { virpiSummary } from '../../text/services';


export default function Services() {
  return (
    <>
      <main
        id="Services"
        className={[styles.servicesPage, 'servicesPage'].join(' ')}
      >
        <Title title="services" />
        <ServicesList />
        <RenderParagraph content={virpiSummary} />
      </main>
      <ContentDevider />
    </>
  );
}
