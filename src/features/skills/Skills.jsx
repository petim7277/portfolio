import styles from "./Skills.module.css";
import java from "../../assets/skills/java_icon.png"
import node from "../../assets/skills/nodejs_icon.png"
import python from "../../assets/skills/python-removebg-preview.png"
import golang from "../../assets/skills/go-tutorial-removebg-preview.png"
import react from "../../assets/skills/react_logo.png"
import javaScript from "../../assets/skills/javascript-removebg-preview.png"
import html from "../../assets/skills/html-removebg-preview.png"
import css from "../../assets/skills/css_icon.png"
import typeScript from "../../assets/skills/typescript_logo.png"
import vueJs from "../../assets/skills/vuejs-removebg-preview.png"
import nextJs from "../../assets/skills/nextjs_icon.png"


const Skills = () => {
    return(
        <section className={styles.skills}>
            <h1>My Technical Skills</h1>
                 <div className={styles.skillsContent}>
                     <img src={java} alt="Java Icon" />
                     <img src={python} alt="Python Icon" />
                     <img src={node} alt="Nodejs Icon" />
                     <img src={golang} alt="Golang Icon" />
                     <img src={react} alt="React Icon" />
                     <img src={javaScript} alt="JavaScript Icon" />
                     <img src={html} alt="HTML Icon" />
                     <img src={css} alt="CSS Icon" />
                     <img src={typeScript} alt="CSS Icon" />
                     <img src={vueJs} alt="CSS Icon" />
                     <img src={nextJs} alt="NextJs Icon" />
                 </div>
        </section>
    );
}
export default Skills;
