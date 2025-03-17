import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { removeTodo, Task, toggleTodo } from "../../store/todoSlice";
import styles from "./TodoList.module.css";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  function toggleTask(task: Task) {
    dispatch(toggleTodo(task.id));
  }

  function removeTask(task: Task) {
    dispatch(removeTodo(task.id));
  }

  return (
    <ul className={styles.container}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.todoItem}>
          <h3 className={styles.todoTitle}>{todo.title}</h3>
          <p className={styles.todoText}>{todo.text}</p>
          <button
            onClick={() => toggleTask(todo)}
            className={`${styles.button} ${styles.buttonToggle}`}
          >
            Изменить статус
          </button>
          <button
            onClick={() => removeTask(todo)}
            className={`${styles.button} ${styles.buttonRemove}`}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
