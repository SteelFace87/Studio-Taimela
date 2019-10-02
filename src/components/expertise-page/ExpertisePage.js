import React from 'react';
import ExpertiseList from './ExpertiseList';
import styles from './ExpertisePage.css';
import Title from '../title/Title';
import ContentDevider from '../content-devider/ContentDevider';

export default function ExpertisePage() {
  return (
    <>
      <section
        id="Expertise"
        className={[styles.expertisePage, 'expertisePage'].join(' ')}
      >
        <Title title="Expertise" />
        <ExpertiseList />
      </section>
      <ContentDevider />
    </>
  );
}
