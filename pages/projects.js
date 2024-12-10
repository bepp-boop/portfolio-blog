import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects - Your Name</title>
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
        <h1>My Projects</h1>
        {/* Add your projects here */}
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <h2>Project 1</h2>
            <p>Description of project 1</p>
          </div>
          <div className={styles.projectCard}>
            <h2>Project 2</h2>
            <p>Description of project 2</p>
          </div>
        </div>
      </main>
    </div>
  );
}
