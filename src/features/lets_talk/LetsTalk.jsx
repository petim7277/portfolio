import styles from './LetsTalk.module.css';
import {MdMarkEmailRead} from "react-icons/md";
import {FaPhone} from "react-icons/fa";
const LetsTalk = () => {
    return (
        <section className={styles.mainDiv}>
            <div className={styles.textDiv}>
                <MdMarkEmailRead /><p>Email : <span>preciousetim603@gmail.com</span></p>
            </div>
            <div className={styles.textDiv}>
                <FaPhone /><p>PhoneNumber : <span>09162280794</span></p>
            </div>

            <button><a href={'/'}>Back</a></button>

        </section>
    )
}
export default LetsTalk