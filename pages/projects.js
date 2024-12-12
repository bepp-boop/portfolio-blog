import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>My Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>My Projects</h1>

        <section>
          <h2 className={styles.yearHeading}>2023</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <h2>API Dev</h2>
              <p>Description of project 1</p>
            </div>
            <div className={styles.projectCard}>
              <h2>API Dev</h2>
              <p>Description of project 1</p>
            </div>
            <div className={styles.projectCard}>
              <h2>API Dev</h2>
              <p>Description of project 1</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className={styles.yearHeading}>2022</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <h2>Project 2</h2>
              <p>Description of project 2</p>
            </div>
            <div className={styles.projectCard}>
              <h2>API Dev</h2>
              <p>Description of project 1</p>
            </div>
            <div className={styles.projectCard}>
              <h2>API Dev</h2>
              <p>Description of project 1</p>
            </div>
            <div className={styles.projectCard}>
              <h2>API Dev</h2>
              <p>Description of project 1</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
