import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.brand}>Precious Etim</h3>
          <p>Lagos, Nigeria</p>
          <p>+234 0916-228-0794</p>
        </div>
        <div className={styles.links}>
          <a href="https://github.com/petim7277" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="www.linkedin.com/in/precious-etim-995b2a296" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:petim7277@gmail.com">Email</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} Precious Etim. Built with clarity and intentionality.</p>
      </div>
    </footer>
  );
};

export default Contact;