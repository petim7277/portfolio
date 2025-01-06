import styles from './about.module.css';
import { GrTechnology } from "react-icons/gr";
import project_icon from "../../assets/projectIcon.png"
import support_icon from "../../assets/supportIcon.png"
import badge_icon from "../../assets/badgeIcon.png"
import CV from "../../assets/EtimPreciousCV.pdf"


const About = () => {

    return (
        <section className={styles.about}>

         <div className={styles.aboutContent}>
                 <h1>About Me ! </h1>
                 <h5>My Introduction into tech  <GrTechnology className={styles.icon} /></h5>
                 <p> My journey into tech began out of sheer curiosity and a desire
                     for something more fulfilling. In my previous roles, I was always
                     exploited and undervalued, which pushed me to seek a career where
                     I could truly thrive it was true equality. I wanted a role that would allow me to express
                     myself, think creatively, and be genuinely productive. Tech became that
                     avenue—a space where my curiosity could flourish, my voice could be heard,
                     and my ambitions could align with a purpose. It’s been a journey of growth
                     and discovery, and I’m excited to be part of an industry that drives meaningful change in the world.
                 </p>
         </div>

         <div className={styles.aboutFeatures}>

                 <div className={styles.featuresBox}>
                     <img src={badge_icon} alt=""/>
                     <p>Technical Experience
                         <span>2+ year of experience</span>
                     </p>
                 </div>

                 <div className={styles.featuresBox}>
                     <img src={project_icon} alt=""/>
                     <p>Projects
                         <span>Over 4+ Diverse Projects</span>
                     </p>
                 </div>

                 <div className={styles.featuresBox}>
                     <img src={support_icon} alt=""/>
                     <p>Support
                         <span>Available for New Opportunities</span>
                     </p>
                 </div>
         </div>

            <div className={styles.buttonBox}>
                <a
                    href={CV}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ styles.cvButton}
                >
                    View My CV
                </a>
            </div>

        </section>
    )
}
export default About;