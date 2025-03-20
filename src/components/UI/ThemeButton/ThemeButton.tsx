import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { toggleTheme } from "../../../store/themeSlice";
import styles from "./themeButton.module.css";

function ThemeButton() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme);

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${currentTheme === "light" ? styles.light : styles.dark}`}
    >
      {currentTheme === "light" ? "Темная тема" : "Светлая тема"}
    </button>
  );
}

export default ThemeButton;
