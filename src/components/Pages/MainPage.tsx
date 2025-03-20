import styles from "./MainPage.module.css";
import { useSelector } from "react-redux";

import { useEffect } from "react";

import Header from "../Todo/Header/Header";
import Footer from "../Todo/Footer/Footer";
import TodoList from "../Todo/TodoList/TodoList";
import { RootState } from "../../store/store";
import AddForm from "../Todo/AddForm/AddForm";

function MainPage() {
  const currentTheme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    document.body.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <AddForm />
        <TodoList />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
