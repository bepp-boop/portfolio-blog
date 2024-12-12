import styles from "../styles/Home.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <a href="/">Quang M Nguyen</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="/api/cv" download>
          CV
        </a>
      </div>
    </nav>
  );
}
