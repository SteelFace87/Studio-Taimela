import React from 'react';
import styles from './Footer.css';
import { footerContent } from '../text/footer';

export default function Footer(){
  const contentList = footerContent.map((item, i)=>{
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
      </ul>
    </footer>
  );
}
