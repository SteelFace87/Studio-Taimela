import React from 'react';
import styles from './Footer.css';
import { footerContent } from '../../text/footer';

export default function Footer() {
  const contentList = footerContent.map((item, i) => {
    return (
      <li key={i}>
        {item}
      </li>
    );
  });
  return (
    <footer className={styles.footer}>
      <ul>
        {contentList}
        <li>Website by <a aria-label='Olli Nieminen' rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/nieminenolli/'>Olli Nieminen</a></li>
        <li>Icons by <a aria-label='Font Awesome' rel="noopener noreferrer" target="_blank" href='https://creativecommons.org/licenses/by/4.0/legalcode'>Font Awesome</a></li>
        <li>Studio Taimela practices the world's greatest privacy
            policy: this website does not collect any personal data.</li>
      </ul>

    </footer>
  );
}
