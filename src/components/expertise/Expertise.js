import React from 'react';
import { makeExpertiseList } from './makeExpertiseList';
import styles from './Expertise.css';
import Title from '../title/Title';
import ContentDevider from '../content-devider/ContentDevider';
import { expertise } from '../../text/expertise';

export default function Expertise() {
  return (
    <>
      <section
        id="Expertise"
        className={[styles.expertisePage, 'expertisePage'].join(' ')}
      >
        <Title title="Expertise" />
        <ul className={styles.ul}>{makeExpertiseList(expertise)}</ul>
      </section>
      <ContentDevider />
    </>
  );
}
