import React from 'react';
import styles from './BackgroundPage.css';
import ContentDevider from '../content-devider/ContentDevider';
import LinkedInButton from './LinkedInButton';
import Background from './Background';

export default function BackgroundPage() {
  return (
    <>
      <section
        id="Background"
        className={[styles.backgroundPage, 'backgroundPage'].join(' ')}
      >
        <Background />
        <LinkedInButton />
      </section>
      <ContentDevider />
    </>
  );
}
