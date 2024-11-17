import styles from './Navbar.module.css';
import {Link} from "react-router-dom";
import {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <Link to={"/"} className={styles.logo}>Precious.</Link>

            <nav>
                <a href="/" className={styles.active}>Home</a>
                <a href="/about">About Me</a>
                <a href="/skills">Skills</a>
                <a href="/projects">Projects</a>
                <a href="contact/">Contact</a>
            </nav>

            <section className={styles.responsiveContainer}>

            <div className={styles.Hamburger} onClick={toggleMenu}>
                {!menuOpen ? <FaBars/> : <div className={styles.hamburgerText}>
                    <div className={styles.firstDiv}>
                    <a href="/" className={styles.active}>Home</a>
                    <a href="/about">About Me</a>
                </div>
                    <div className={styles.firstDiv}>
                    <a href="/skills">Skills</a>
                    <a href="/projects">Projects</a>
                    </div>
                    <a href="/contact">Contact</a>
                    <FaTimes/>
                </div>}
            </div>

            </section>

        </header>
    );
}
export default Navbar;