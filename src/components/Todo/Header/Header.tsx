import { useDispatch } from "react-redux";
import ThemeButton from "../../UI/ThemeButton/ThemeButton";
import styles from "./Header.module.css";
import { setPriority } from "../../../store/todoSlice";

function Header() {
  const dispatch = useDispatch();

  function filterHigh() {
    dispatch(setPriority("high"));
  }

  function filterMedium() {
    dispatch(setPriority("medium"));
  }

  function filterLow() {
    dispatch(setPriority("low"));
  }

  function resetFilter() {
    dispatch(setPriority("all"));
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Менеджер задач</h1>
      <nav className={styles.nav}>
        <button className={styles.navButton} onClick={filterHigh}>
          Высокий приоритет
        </button>
        <button className={styles.navButton} onClick={filterMedium}>
          Средний приоритет
        </button>
        <button className={styles.navButton} onClick={filterLow}>
          Низкий приоритет
        </button>
        <button className={styles.navButton} onClick={resetFilter}>
          Все задачи
        </button>

        <ThemeButton />
      </nav>
    </header>
  );
}

export default Header;
