import React from 'react';
import styles from './LetsTalk.module.css';

const LetsTalk = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Ready to build something great?</h2>
        <p className={styles.text}>
          I’m always seeking meaningful work that challenges me and aligns with a culture that values progress, people, and purpose.
        </p>
        <a href="mailto:petim7277@gmail.com" className={styles.button}>Let's Talk</a>
      </div>
    </section>
  );
};

export default LetsTalk;