import React from 'react';
import { motion } from 'framer-motion';
import styles from './about.module.css';

const experiences = [
  {
    id: 1,
    role: "Backend Engineer",
    company: "54Pay Limited",
    achievements: [
      "Integrated payment systems with external partners across multiple African countries (Gambia, Gabon).",
      "Developed backend APIs for payment collection, completion, and transaction status checks.",
      "Collaborated directly with partners to confirm transaction rules and collect credentials.",
      "Participated in code reviews, production testing, and coordinated final production tests."
    ]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Semicolon Ventures",
    achievements: [
      "Designed and implemented scalable, production-ready APIs consumed by frontend teams.",
      "Routinely delivered 1–2 deployable features or backend systems per day.",
      "Collaborated with engineers to optimize legacy codebase with modern design patterns.",
      "Participated in stakeholder-facing discussions to clarify API use and integration logic."
    ]
  }
];

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className={styles.card}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className={styles.role}>{exp.role}</h3>
              <p className={styles.company}>@ {exp.company}</p>
              <ul className={styles.list}>
                {exp.achievements.map((item, i) => (
                  <li key={i} className={styles.listItem}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;