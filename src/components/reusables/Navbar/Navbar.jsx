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

            <nav>
                <div className={styles.logoDiv}>
                    <Link to={"/"} className={styles.logo}>Precious.</Link>
                    </div>
                <div className={styles.navLinks}>
                    <a href="/" className={styles.active}>Home</a>
                    <a href="/about">About </a>
                    <a href="/skills">Skills</a>
                    <a href="/projects">Projects</a>
                    <a href="contact/">Contact</a>
                </div>
            </nav>

            <div className={styles.mobileNav} onClick={toggleMenu}>
                <div className={styles.wrapDiv} onClick={toggleMenu}>
                        <div className={styles.mobileLogoDiv}>
                            <Link to={"/"} className={styles.mobileLogo}>Precious.</Link>
                        </div>

                        <div >
                        {menuOpen ? <FaTimes className={styles.icon}/> : <FaBars className={styles.icon}/>}
                        {menuOpen ?
                                <div className={styles.hamburgerText}>
                                    <a href="/" className={styles.active}>Home</a>
                                    <a href="/about">About </a>
                                    <a href="/skills">Skills</a>
                                    <a href="/projects">Projects</a>
                                    <a href="/contact">Contact</a>
                                </div> : ""}
                        </div>
                </div>
            </div>


        </header>
    );
}
export default Navbar;