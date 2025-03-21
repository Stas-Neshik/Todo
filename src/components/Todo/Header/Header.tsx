import { useDispatch } from "react-redux";
import ThemeButton from "../../UI/ThemeButton/ThemeButton";
import styles from "./Header.module.css";
import { setFilter } from "../../../store/todoSlice";

function Header() {
  const dispatch = useDispatch();

  function filterAll() {
    dispatch(setFilter("all"));
  }

  function filterDone() {
    dispatch(setFilter("Done"));
  }

  function filterProgress() {
    dispatch(setFilter("inProgress"));
  }

  function filterNew() {
    dispatch(setFilter("newTask"));
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Менеджер задач</h1>
      <nav className={styles.nav}>
        <button className={styles.navButton} onClick={filterAll}>
          Все задачи
        </button>
        <button className={styles.navButton} onClick={filterProgress}>
          В работе
        </button>
        <button className={styles.navButton} onClick={filterDone}>
          Завершенные
        </button>
        <button className={styles.navButton} onClick={filterNew}>
          Новые
        </button>
        <ThemeButton />
      </nav>
    </header>
  );
}

export default Header;
