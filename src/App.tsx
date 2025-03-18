import AddForm from "./components/AddForm/AddForm";
import TodoList from "./components/TodoList/TodoList";
import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { useEffect } from "react";

import ThemeButton from "./components/themeButton/themeButton";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    document.body.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
  <ThemeButton/>
      <div className={styles.content}>
        <AddForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
