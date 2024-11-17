import styles from './Home.module.css';

const Home = () => {
    return (
        <section className={styles.home}>
          <div className={styles.homeContent}>
              <h1>Hi, I'm Precious Etim</h1>
              <h3>Software Engineer</h3>
              <p>Precious is a software engineer driven by a growth mindset, powered with grit, and ready to<br/>
                  bring impact to any organization she finds herself in. She prides herself on her coding<br/>
                  prowess, ability to adapt to change, the ability to ask questions when necessary, and a strong<br/>
                  desire to work on innovative projects and solutions that lead to change.</p>
              <div className={styles.bottonBox}>
                  <a href="/">Hire Me</a>
                  <a href="/">Let's Talk</a>
              </div>
          </div>

        </section>
    )
}
export default Home;