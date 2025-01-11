import styles from './Home.module.css';
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import heroImage from '../../assets/heroPic.png';
import CV from "../../assets/EtimPreciousCV.pdf";

const Home = () => {
    const linkedinProfile = "https://www.linkedin.com/in/etim-precious-995b2a296/";
    const  gitHubProfile = "https://github.com/petim7277";
    const mediumProfile = "https://medium.com/@petim7277"
    return (
        <section className={styles.home}>
            <div className={styles.homeContent}>
                <h1>Hi i am Precious Etim</h1>
                <h3>Software Engineer</h3>
                <p>Precious is a software engineer driven by a growth mindset, powered with grit, and ready to
                    bring impact to any organization she finds herself in. She prides herself on strong coding skills
                    demonstrated through diverse projects, ability to adapt to change, the ability to ask questions when
                    necessary, and a strong
                    desire to work on innovative projects and solutions that lead to change.</p>
                <div className={styles.buttonBox}>
                    <a href={CV}
                       target="_blank"
                       rel="noopener noreferrer"
                    >Hire Me</a>
                    <a href="/letsTalk">Let's Talk</a>
                </div>
                <div className={styles.mobileSocials}>
                    <a href={"/"}><FaMediumM/></a>
                    <a href={gitHubProfile}><FaGithub/></a>
                    <a href={linkedinProfile}><FaLinkedinIn/></a>
                </div>

                <div className={styles.socials}>
                    <a href={mediumProfile}><FaMediumM/></a>
                    <a href={gitHubProfile}><FaGithub/></a>
                    <a href={linkedinProfile}><FaLinkedinIn/></a>
                </div>
            </div>

            <img src={heroImage} alt={"precious-hero "}/>

        </section>
    )
}
export default Home;