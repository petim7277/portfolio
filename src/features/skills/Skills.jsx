<<<<<<< HEAD
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
=======
import styles from "./Skills.module.css";
import java from "../../assets/skills/java_icon.png"
import node from "../../assets/skills/nodejs_icon.png"
import pyIcon from "../../assets/skills/pyIcon.png"
import django from "../../assets/skills/djangoLogo.png"
import golang from "../../assets/skills/go-tutorial-removebg-preview.png"
import react from "../../assets/skills/react_logo.png"
import reactNative from "../../assets/skills/reactnative-inner.svg"
import javaScript from "../../assets/skills/javascript-removebg-preview.png"
import html from "../../assets/skills/html-removebg-preview.png"
import css from "../../assets/skills/css_icon.png"
import tailwind from "../../assets/skills/tailwindcss-removebg-preview.png"
import typeScript from "../../assets/skills/typescript_logo.png"
import vuJs from "../../assets/skills/VuJsIcon.png"
import nextJs from "../../assets/skills/nextjs_icon.png"
import spring from "../../assets/skills/springboot-removebg-preview.png"
import junit from "../../assets/skills/junit-removebg-preview.png"
import mockito from "../../assets/skills/mockito-removebg-preview.png"
import maven from "../../assets/skills/maven.png"
import mongo from "../../assets/skills/mongodbpix-removebg-preview.png"
import mysql from "../../assets/skills/mysql.png"
import postgresql from "../../assets/skills/postgresql.png"
import keycloak from "../../assets/skills/Keycloak_Logo-removebg-preview.png"
import postman from "../../assets/skills/postman-removebg-preview.png"
import swagger from "../../assets/skills/swagger-removebg-preview.png"
import render from "../../assets/skills/render-removebg-preview.png"
import redux from "../../assets/skills/redux-removebg-preview.png"
import material from "../../assets/skills/materialUi-removebg-preview.png"
import linux from "../../assets/skills/linux-removebg-preview.png"
import figma from "../../assets/skills/fig-removebg-preview.png"
import flutter from "../../assets/skills/flutter_icon.png"
import docker from "../../assets/skills/docker-removebg-preview (1).png"
import git from "../../assets/skills/git-removebg-preview.png"
import gitHub from "../../assets/skills/gitHubIcon.png"
import lark from "../../assets/skills/LarkIcon.png"
import jira from "../../assets/skills/JiraIcon.png"
import confluence from "../../assets/skills/ConfluenceIcon.png"


const Skills = () => {
    return(
        <section className={styles.skills}>
            <h1>My Technical Skills</h1>
            <div className={styles.skillsText}>
                <div className={styles.skillsTextBox}>
                    <h5>Backend Development Tools</h5>
                    <li>Java</li>
                    <li>NodeJs</li>
                    <li>Python</li>
                    <li>NestJs</li>
                    <li>JavaScript</li>
                </div>

                <div className={styles.skillsTextBox}>
                    <h5>Frontend Development Tools</h5>
                    <li>HTML/CSS</li>
                    <li>ReactJs</li>
                    <li>Angular</li>
                    <li>VueJs</li>
                    <li>ReactNative</li>
                </div>

                <div className={styles.skillsTextBox}>
                    <h5>Frameworks and Libraries</h5>
                    <li>SpringBoot</li>
                    <li>Django</li>
                    <li>ExpressJs</li>
                    <li>Boostrap</li>
                    <li>Tailwind</li>
                </div>

            </div>
            <div className={styles.skillsContent}>
                <div className={styles.row}>
                    <img src={java} alt="Java Icon"/>
                </div>

                <div className={styles.row}>
                    <img src={spring} alt="Spring Icon"/>
                    <img src={junit} alt="Junit Icon"/>
                    <img src={postman} alt="Postman Icon"/>
                </div>

                <div className={styles.row}>
                    <img src={mockito} alt="Junit Icon"/>
                    <img src={maven} alt="Maven Icon"/>
                    <img src={node} alt="Nodejs Icon"/>
                    <img src={swagger} alt="Swagger Icon"/>
                </div>

                <div className={styles.row}>
                    <img src={nextJs} alt="NextJs Icon"/>
                    <img src={golang} alt="Golang Icon"/>
                    <img src={react} alt="React Icon"/>
                    <img src={reactNative} alt="Reactnative Icon"/>
                    <img src={render} alt="Render Icon"/>
                </div>

                <div className={styles.row}>
                    <img src={javaScript} alt="JavaScript Icon"/>
                    <img src={html} alt="HTML Icon"/>
                    <img src={css} alt="CSS Icon"/>
                    <img src={tailwind} alt="CSS Icon"/>
                    <img src={typeScript} alt="CSS Icon"/>
                    <img src={material} alt="CSS Icon"/>
                </div>

                <div className={styles.row}>
                    <img src={vuJs} alt="CSS Icon"/>
                    <img src={mongo} alt="Mongo Icon"/>
                    <img src={mysql} alt="Mysql Icon"/>
                    <img src={postgresql} alt="Postgres Icon"/>
                    <img src={keycloak} alt="Keycloak Icon"/>
                    <img src={figma} alt="Figma Icon"/>
                    <img src={flutter} alt="Flutter Icon"/>
                </div>
                <div className={styles.row}>
                <imxg src={pyIcon} alt="Python Icon"/>
                <imxg src={django} alt="Django Icon"/>
                <img src={redux} alt="Redux Icon"/>
                <img src={linux} alt="CSS Icon"/>
                <img src={docker} alt="Docker Icon"/>
                <img src={git} alt="Git Icon"/>
                <img src={gitHub} alt="GitHub Icon"/>
                <img src={lark} alt="Lark Icon"/>
                <img src={jira} alt="Jira Icon"/>
                <img src={confluence} alt="Confluence Icon"/>
                </div>

            </div>
        </section>
    );
}
export default Skills;
>>>>>>> 02db15c14e7a933723872583f387341330423c21
