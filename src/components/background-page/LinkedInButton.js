import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import styles from './LinkedInButton.css';

export default function LinkedInButton() {
  return (
    <section className={styles.social}>
      <p>Find my detailed work experience on LinkedIn</p>
      <a
        alt="Linked In"
        aria-label="Linked In"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/virpinieminen/"
      >
        <FaLinkedin size={42} />
      </a>
    </section>
  );
}
