import styles from './Home.module.css';
import {FaFacebookF, FaGithub, FaLinkedinIn} from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import heroImage from '../../assets/heroPic.png';
import About from "../about_me/about";

const Home = () => {
    const linkedinProfile = "https://www.linkedin.com/in/etim-precious-995b2a296/";
    const  gitHubProfile = "https://github.com/petim7277";
    const mediumProfile = "https://medium.com/@petim7277"
    return (
        <section className={styles.home}>
            <div className={styles.homeContent}>
                <h1>Hi, I'm Precious Etim</h1>
                <h3>Software Engineer</h3>
                <p>Precious is a software engineer driven by a growth mindset, powered with grit, and ready to
                    bring impact to any organization she finds herself in. She prides herself on her coding
                    prowess, ability to adapt to change, the ability to ask questions when necessary, and a strong
                    desire to work on innovative projects and solutions that lead to change.</p>
                <div className={styles.buttonBox}>
                    <a href="/">Hire Me</a>
                    <a href="/">Let's Talk</a>
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

            <img  src={heroImage} alt={"precious-hero "}/>

        </section>
    )
}
export default Home;