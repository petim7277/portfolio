import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.glowLine}></div>

      <div className={styles.container}>
        
        <div className={styles.topSection}>
          <motion.h2 
            className={styles.massiveText}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Build <br/> The <span className="gradient-text">Future.</span>
          </motion.h2>
          
          <div className={styles.statusBox}>
            <span className={styles.statusDot}></span>
            <p>Available for new opportunities</p>
          </div>
        </div>

        <div className={styles.mainGrid}>
          {/* LOCATION COLUMN */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Location</h3>
            <p className={styles.textWithIcon}>
              {/* FIXED LOCATION PIN */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
              </svg>
              Lagos, Nigeria
            </p>
            <p className={styles.text}>+234 0916-228-0794</p>
            <p className={styles.text}>WAT Timezone</p>
          </div>

          {/* SOCIALS COLUMN */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Socials</h3>
            <div className={styles.links}>
              
              <a href="https://github.com/petim7277" target="_blank" rel="noopener noreferrer" className={styles.link}>
                {/* PURE GITHUB SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              
              <a href="https://www.linkedin.com/in/precious-etim-995b2a296" target="_blank" rel="noopener noreferrer" className={styles.link}>
                {/* PURE LINKEDIN SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>

              <a href="mailto:petim7277@gmail.com" className={styles.link}>
                {/* PURE EMAIL SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
                Email
              </a>

            </div>
          </div>

          {/* TECH COLUMN */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Tech Stack</h3>
            <p className={styles.text}>Java, Spring Boot</p>
            <p className={styles.text}>React, Express</p>
            <p className={styles.text}>Microservices Architect</p>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Precious Etim. Engineered with precision.
          </p>
          <button onClick={scrollToTop} className={styles.backToTop}>
            <span className={styles.backText}>Back to Top</span>
            <div className={styles.iconCircle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </div>
          </button>
        </div>
        
      </div>
    </footer>
  );
};

export default Contact;