import React from 'react';
import styles from './MobileBackground.css';

export default function MobileBackground(){
  return (
    <section className={styles.background}>
      <section className={styles.section}>
        <h3>Languages</h3>
        <ul>
          <li className={styles.check}>✓</li>
          <li><h4>English</h4></li>
          <li><p>native, born in</p></li>
          <li><p>Pittsburgh, PA USA</p></li>
        </ul>
        <ul>
          <li className={styles.check}>✓</li>
          <li><h4>Finnish</h4></li>
          <li><p>native through</p></li>
          <li><p>parents</p></li>
        </ul>
        <ul>
          <li className={styles.check}>✓</li>
          <li><h4>French</h4></li>
          <li><p>can order</p></li>
          <li><p> wine and food</p></li>
        </ul>
        <ul>
          <li className={styles.check}>✓</li>
          <li><h4>German</h4></li>
          <li><p>can talk about</p></li>
          <li><p>the weather</p></li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3>Certificates</h3>
        <ul>
          <li className={styles.check}>✓</li>
          <li><h4>TOGAF</h4></li>
          <li><p>Foundation</p></li>
        </ul>
        <ul>
          <li className={styles.check}>✓</li>
          <li><h4>ITIL</h4></li>
          <li><p>Certified</p></li>
        </ul>
        <ul>
          <li className={styles.check}>✓</li>
          <li><h4>Prince 2</h4></li>
          <li><p>Foundation</p></li>
        </ul>
        <ul>
          <li className={styles.check}>✓</li>
          <li><p>Trained in</p></li>
          <li><h5>Balanced</h5></li>
          <li><h5>Scorebard</h5></li>
        </ul>
      </section>
    </section>
  );
}
