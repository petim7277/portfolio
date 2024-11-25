import styles from "./Skills.module.css";
import java from "../../assets/skills/java-removebg-preview.png"
import node from "../../assets/skills/node-removebg-preview.png"
import python from "../../assets/skills/python-removebg-preview.png"
import golang from "../../assets/skills/go-tutorial-removebg-preview.png"
import react from "../../assets/skills/reactIcon.png"
import javaScript from "../../assets/skills/javascript-removebg-preview.png"
import html from "../../assets/skills/html-removebg-preview.png"
import css from "../../assets/skills/css.png"
import typeScript from "../../assets/skills/ts-removebg-preview.png"
import vueJs from "../../assets/skills/vuejs-removebg-preview.png"


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
                 </div>
        </section>
    );
}
export default Skills;
