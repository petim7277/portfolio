import React from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.css';
import heroPic from '../../assets/beauty.png';
import cvFile from '../../assets/PRECIOUS-ETIM-FRONTEND-CV.pdf'; 

const Home = () => {
  // Animation variants for staggered text
  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="home" className={styles.heroSection}>
      {/* Background glowing orb */}
      <div className={styles.glowOrb}></div>

      <motion.div 
        className={styles.content}
        variants={containerVars}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={itemVars} className={styles.greeting}>
          Welcome to my universe 
        </motion.p>
        <motion.h1 variants={itemVars} className={styles.title}>
          I'm <span className="gradient-text">Precious Etim</span>
        </motion.h1>
        <motion.h2 variants={itemVars} className={styles.subtitle}>
          Software Engineer
        </motion.h2>
        <motion.p variants={itemVars} className={styles.bio}>
          I engineer scalable, production-ready systems and craft flawless user experiences. 
          Driven by logic, built with intention and styled with precision.
        </motion.p>
        
        <motion.div variants={itemVars} className={styles.actions}>
          <motion.a 
            href="#projects" 
            className={styles.primaryBtn}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 150, 51, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a 
            href={cvFile}
            download 
            className={styles.secondaryBtn}
            whileHover={{ scale: 1.05, borderColor: "#FF9633", color: "#FF9633" }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>

      {/* THE PLAYFUL IMAGE SECTION */}
      <motion.div 
        className={styles.imageContainer}
        initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.5 }} /* Springy bounce on load */
      >
        <motion.div 
          className={styles.imageWrapper}
          animate={{ y: [-15, 15, -15] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          whileHover={{ scale: 1.05, rotate: 5 }} /* Playful tilt when you hover */
        >
          <img src={heroPic} alt="Precious Etim" className={styles.profileImage} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;