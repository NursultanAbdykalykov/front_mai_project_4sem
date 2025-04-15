import darkThemeUrl from "../../shared/assets/icons/darkTheme.svg";
import styles from "./styles.module.scss";

export const Header = () => {
  const toggleTheme = () => {
    console.log("Dark");
  };
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <p className={styles.headerTitle}>Has-Been</p>
        <p className={styles.headerSubtitle}>Восстановление цвета</p>
      </div>
      <button
        className={styles.themeSwitch}
        onClick={toggleTheme}
        aria-label="Сменить тему"
      >
        <img
          src={darkThemeUrl}
          alt="Иконка темы"
          className={styles.themeIcon}
          width={48}
          height={48}
        />
      </button>
    </div>
  );
};
