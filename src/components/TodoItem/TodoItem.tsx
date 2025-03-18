import { useState } from "react";
 import { useDispatch } from "react-redux";
 import { toggleTodo, removeTodo } from "../../store/todoSlice";
import EditTodoModal from "../EditTodoModal/EditTodoModal";
import styles from "./TodoItem.module.css";
import { Task } from "../../utils/types";




function TodoItem({ id, title, text, completed }: Task) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  function handleToggle() {
    dispatch(toggleTodo(id))
  }

  function handleRemove() {
    dispatch(removeTodo(id))
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <li className={styles.todoItem}>
      <h3 className={styles.todoTitle}>{title}</h3>
      <p className={styles.todoText}>{text}</p>
      <button
        onClick={handleToggle}
        className={`${styles.button} ${styles.buttonToggle}`}
      >
        Изменить статус
      </button>
      <button onClick={handleEdit} className={styles.buttonEdit}>
        ✏️ Редактировать
      </button>
      <button
        onClick={handleRemove}
        className={`${styles.button} ${styles.buttonRemove}`}
      >
        Удалить
      </button>

      {isEditing && (
        <EditTodoModal
          task={{ id, title, text, completed }}
          onClose={() => setIsEditing(false)}
        />
      )}
    </li>
  );
}

export default TodoItem;
