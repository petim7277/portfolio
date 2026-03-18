import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillCategories = [
  { title: "Languages", skills: ["JavaScript", "Java", "Python", "HTML5/CSS3", "NodeJS"] },
  { title: "Frontend", skills: ["React.js",  "TypeScript", "Vue JS", ] },
  { title: "Backend", skills: ["Spring Boot", "Node.js / Express", "Django", "RESTful APIs"] },
  { title: "Databases", skills: ["PostgreSQL", "MySQL", "MongoDB"] },
  { title: "DevOps & Tools", skills: ["Docker", "Git/GitHub", "Postman", "Swagger", "Apache Pulsar"] }
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        
        {/* LEFT SIDE: The Orbital Core Visualization */}
        <motion.div 
          className={styles.visualColumn}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.orbitWrapper}>
            {/* Updated to Fullstack! */}
            <div className={styles.centerNode}>Fullstack<br/>Core</div>
            
            {/* Rotating Orbits */}
            <div className={`${styles.orbit} ${styles.orbit1}`}>
              <div className={styles.techPlanet}>React</div>
            </div>
            <div className={`${styles.orbit} ${styles.orbit2}`}>
              <div className={styles.techPlanet}>Spring</div>
            </div>
            <div className={`${styles.orbit} ${styles.orbit3}`}>
              <div className={styles.techPlanet}>Docker</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: The Stacked Glass Cards */}
        <div className={styles.contentColumn}>
          <motion.div 
            className={styles.headerWrapper}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.heading}>My <span className="gradient-text">Arsenal</span></h2>
            <p className={styles.subtext}>Commanding the entire stack to engineer flawless, scalable applications.</p>
          </motion.div>

          <div className={styles.stackContainer}>
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className={styles.skillStrip}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.stripLeft}>
                  <div className={styles.accentLine}></div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>
                
                <div className={styles.tags}>
                  {category.skills.map((skill, i) => (
                    <span key={i} className={styles.tag}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;