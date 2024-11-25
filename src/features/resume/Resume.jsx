import styles from "./Resume.module.css";
import cv from "../../assets/Precious Etim - Resume.svg"
const Resume = () => {
    return (
        <section className={styles.mainContainer}>
            <iframe  className={styles.pdfDiv} title={"A resume pdf"} src={cv} width="100%" height="600px"></iframe>

        </section>
    )
}
export default Resume;