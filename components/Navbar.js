import Link from "next/link";
import styles from "../styles/Home.module.css";
import { translations } from "../translations";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { language } = useLanguage();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link href="/">Quang M Nguyen</Link>
        <Link href="/projects">{translations[language].project}</Link>
        <Link href="/about">{translations[language].about}</Link>
        <a href="/api/cv" download>
          CV
        </a>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
