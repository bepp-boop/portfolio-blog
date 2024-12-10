import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Your Name - Portfolio</title>
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
          <button className={styles.themeToggle}>
            {/* You can use an icon here, for example: */}
            🌓
          </button>
        </div>
      </nav>
    </div>
  );
}
