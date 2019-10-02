import React from 'react';
import styles from './AboutVirpi.css';
import { virpiSummary } from '../../text/services';

export default function AboutVirpi() {
  return <p className={styles.aboutMe}>{virpiSummary}</p>;
}
