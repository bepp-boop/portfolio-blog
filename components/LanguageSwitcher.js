import { useLanguage } from "../contexts/LanguageContext";
import styles from "../styles/LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  if (!language) return null;

  const getFlag = () => {
    switch (language) {
      case "en":
        return "🇺🇸";
      case "vi":
        return "🇻🇳";
      case "sv":
        return "🇸🇪";
      default:
        return "🇺🇸";
    }
  };

  return (
    <button onClick={toggleLanguage} className={styles.languageButton}>
      {getFlag()}
    </button>
  );
}
