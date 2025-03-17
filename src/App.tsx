import AddForm from "./components/AddForm/AddForm";
import TodoList from "./components/TodoList/TodoList";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <div className={styles.content}>
        <AddForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
