import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import styles from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <ul className={styles.container}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          text={todo.text}
          completed={todo.completed}
          date={todo.date}
        />
      ))}
    </ul>
  );
}

export default TodoList;
