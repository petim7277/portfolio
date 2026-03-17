import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const projectData = [
  {
    name: "ENUM Platform",
    description: "A digital ecosystem empowering African talent with access to skills, jobs, and global payment pipelines.",
    tech: ["Java", "Spring Boot", "Apache Pulsar", "Microservices"],
    link: "https://enumverse.com/"
  },
  {
    name: "QONNECT Workspace",
    description: "Engineering collaboration hub for logging bugs, task assignment, and tracking resolution with JWT auth.",
    tech: ["React", "Express", "Keycloak", "Swagger"],
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured <span className="gradient-text">Builds</span>
        </motion.h2>
        
        <div className={styles.grid}>
          {projectData.map((project, index) => (
            <motion.div 
              key={index} 
              className={styles.glassCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }} 
            >
              <div className={styles.cardHeader}>
                <div className={styles.folderIcon}>📁</div>
                <h3 className={styles.title}>{project.name}</h3>
              </div>
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <span key={i} className={styles.techPill}>{tech}</span>
                ))}
              </div>

              {/* THIS IS THE NEW LINK BUTTON */}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.projectLink}
                >
                  Live Site ↗
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;