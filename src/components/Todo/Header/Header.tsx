import ThemeButton from "../../UI/ThemeButton/ThemeButton";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Менеджер задач</h1>
      <nav className={styles.nav}>
        <button className={styles.navButton}>Все задачи</button>
        <button className={styles.navButton}>В работе</button>
        <button className={styles.navButton}>Завершенные</button>
        <ThemeButton />
      </nav>
    </header>
  );
}

export default Header;
