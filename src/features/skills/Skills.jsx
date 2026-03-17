import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillCategories = [
  { title: "Programming Languages", skills: ["Java", "Python", "JavaScript"] },
  { title: "Frameworks", skills: ["Spring Boot", "Django", "Express"] },
  { title: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
  { title: "DevOps & Tools", skills: ["Docker", "Git & GitHub", "Postman", "Swagger", "Apache Pulsar"] },
  { title: "Methodologies", skills: ["Microservices", "TDD", "Agile", "Scrum"] }
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.heading}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className={styles.categoryCard}
              initial={{ opacity: 0, scale: 0.8 }} /* Scales up */
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.tags}>
                {category.skills.map((skill, i) => (
                  <span key={i} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
