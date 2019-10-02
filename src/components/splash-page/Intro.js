import React from 'react';
import { introLines } from '../../text/splashPage';
import styles from './Intro.css';

export default function Intro() {
  const intro = introLines.map((line, i) => <li key={i}>{line}</li>);
  return <ul className={styles.intro}>{intro}</ul>;
}
