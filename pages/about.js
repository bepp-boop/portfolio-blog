import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div>
      <Head>
        <title>About - Your Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>Your Name</h1>
        </div>
        <div className={styles.navLinks}>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/cv.pdf" download>
            Download CV
          </a>
          <button className={styles.themeToggle}>🌓</button>
        </div>
      </nav>

      <main className={styles.main}>
        <h1>About Me</h1>
        <div className={styles.aboutContent}>
          <p>Hello! I'm [Your Name]. Add your bio here...</p>
          <div className={styles.skills}>
            <h2>Skills</h2>
            {/* Add your skills here */}
            <ul>
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
