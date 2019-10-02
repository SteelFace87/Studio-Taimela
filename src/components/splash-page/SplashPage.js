import React from 'react';
import styles from './SplashPage.css';
import ContentDevider from '../content-devider/ContentDevider';
import Heading from './Heading';
import Intro from './Intro';

export default function SplahPage() {
  return (
    <>
      <section
        id="Splashpage"
        className={[styles.splashPage, 'splashPage'].join(' ')}
      >
        <section className={styles.text}>
          <Heading />
          <Intro />
        </section>
        <section className={styles.img} />
      </section>
      <ContentDevider />
    </>
  );
}
