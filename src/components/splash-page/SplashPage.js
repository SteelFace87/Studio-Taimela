import React from 'react';
import styles from './SplashPage.css';
import ContentDevider from '../content-devider/ContentDevider';
import { lineMapper } from '../../helper-functions/lineMapper';
import { headingLines, introLines } from '../../text/splashPage';

export default function SplahPage() {
  return (
    <>
      <section
        id="Splashpage"
        className={[styles.splashPage, 'splashPage'].join(' ')}
      >
        <section className={styles.text}>
          <ul className={styles.heading}>{lineMapper(headingLines)}</ul>
          <ul className={[styles.about, 'about'].join(' ')}>
            {lineMapper(introLines, 'p')}
          </ul>
        </section>
        <section className={styles.img} />
      </section>
      <ContentDevider />
    </>
  );
}
