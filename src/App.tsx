import AddForm from "./components/Todo/AddForm/AddForm";

import styles from "./App.module.css";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useEffect } from "react";

import ThemeButton from "./components/UI/ThemeButton/ThemeButton";
import TodoList from "./components/Todo/TodoList/TodoList";

function App() {
  const currentTheme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    document.body.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <ThemeButton />
      <div className={styles.content}>
        <AddForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
