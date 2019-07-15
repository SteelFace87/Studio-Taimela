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
        <li>Icons by: <a aria-label='React Icons' rel="noopener noreferrer" target="_blank" href='https://react-icons.netlify.com'>React Icons</a></li>
        <li>Studio Taimela practices the world's greatest privacy
            policy: this website does not collect any personal data.</li>
      </ul>

    </footer>
  );
}
