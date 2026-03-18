import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const projectData = [
  {
    name: "ENUM Platform",
    description: "A digital ecosystem empowering African talent with access to skills, jobs, and global payment pipelines. Engineered for high availability and seamless cross-border transactions.",
    tech: ["Java", "Spring Boot", "Apache Pulsar", "Microservices"],
    liveLink: "https://enumverse.com/", 
    githubLink: "https://github.com/petim7277", 
    accentColor: "#FF9633" 
  },
  {
    name: "QONNECT Workspace",
    description: "Engineering collaboration hub for logging bugs, task assignment, and tracking resolution. Features robust JWT authentication and real-time updates.",
    tech: ["React", "Express", "Keycloak", "Swagger"],
    liveLink: "", 
    githubLink: "https://github.com/petim7277", 
    accentColor: "#80C4FF" 
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.headerWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.heading}>Featured <span className="gradient-text">Builds</span></h2>
          <p className={styles.subtext}>Production-grade systems designed for scale and performance.</p>
        </motion.div>
        
        <div className={styles.showcase}>
          {projectData.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={index} 
                className={`${styles.projectCard} ${isEven ? styles.row : styles.rowReverse}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                
                {/* PROJECT VISUAL (Abstract Glow Box) */}
                <div className={styles.visualColumn}>
                  <div 
                    className={styles.imagePlaceholder}
                    style={{ '--project-accent': project.accentColor }}
                  >
                    <div className={styles.glowOverlay}></div>
                    <div className={styles.abstractCode}>
                      <span>{`{`}</span>
                      <span>{`  "status": "Production Ready",`}</span>
                      <span>{`  "scale": "Infinite"`}</span>
                      <span>{`}`}</span>
                    </div>
                  </div>
                </div>

                {/* PROJECT DETAILS */}
                <div className={styles.contentColumn}>
                  <h3 className={styles.title}>{project.name}</h3>
                  <div className={styles.descriptionBox}>
                    <p>{project.description}</p>
                  </div>
                  
                  <div className={styles.techStack}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className={styles.techPill}>{tech}</span>
                    ))}
                  </div>

                  <div className={styles.links}>
                    {/* CONDITIONAL RENDERING RESTORED */}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                        <span className={styles.icon}>&lt;/&gt;</span> Code
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                        Live Site <span className={styles.arrow}>↗</span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;