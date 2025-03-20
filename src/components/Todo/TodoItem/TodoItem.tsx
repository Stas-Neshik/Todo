import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../../../store/todoSlice";
import EditTodoModal from "../EditTodoModal/EditTodoModal";
import styles from "./TodoItem.module.css";
import { Task } from "../../../utils/types";

function TodoItem({ id, title, text, completed, date }: Task) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  function handleToggle() {
    dispatch(toggleTodo(id));
  }

  function handleRemove() {
    dispatch(removeTodo(id));
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function getDateColor(date: string) {
    const taskDate = new Date(date + "T00:00:00Z");
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - taskDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    if (daysDifference >= 0 && daysDifference <= 5) {
      return styles.dateGreen;
    } else if (daysDifference > 5 && daysDifference <= 10) {
      return styles.dateYellow;
    } else if (daysDifference > 10) {
      return styles.dateRed;
    }
    return "";
  }

  return (
    <li className={styles.todoItem}>
      <h3 className={styles.todoTitle}>{title}</h3>
      <p className={styles.todoText}>{text}</p>
      <p className={styles.todoText}>{completed}</p>
      <p className={`${styles.todoDate} ${getDateColor(date)}`}>{date}</p>

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
          task={{ id, title, text, completed, date }}
          onClose={() => setIsEditing(false)}
        />
      )}
    </li>
  );
}

export default TodoItem;
