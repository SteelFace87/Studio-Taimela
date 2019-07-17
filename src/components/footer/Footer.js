import React from 'react';
import styles from './Footer.css';
import { footerContent } from '../../text/footer';
import { HashLink as Link } from 'react-router-hash-link';

import {
  FaChevronCircleUp
} from 'react-icons/fa';

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
        <li><Link to='#Splashpage'><FaChevronCircleUp size={32}/></Link></li>

        {contentList}
        <li>Website by <a aria-label='Olli Nieminen' rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/nieminenolli/'>Olli Nieminen</a></li>
        <li>Icons by <a aria-label='Font Awesome' rel="noopener noreferrer" target="_blank" href='https://creativecommons.org/licenses/by/4.0/legalcode'>Font Awesome</a></li>
        <li>Studio Taimela practices the world's greatest privacy
            policy: this website does not collect any personal data.</li>
      </ul>

    </footer>
  );
}
