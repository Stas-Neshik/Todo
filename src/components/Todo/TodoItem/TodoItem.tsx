import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  toggleTodoPriority,
} from "../../../store/todoSlice";
import styles from "./TodoItem.module.css";
import { Task } from "../../../utils/types";
import Modal from "../../UI/Modal/Modal";

function TodoItem({ id, title, text, completed, date, priority }: Task) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  function handleToggle() {
    dispatch(toggleTodo(id));
  }

  function handleTogglePriority() {
    dispatch(toggleTodoPriority(id));
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
      <p className={styles.todoText}>{priority}</p>

      <button
        onClick={handleToggle}
        className={`${styles.button} ${styles.buttonToggle}`}
      >
        Изменить статус
      </button>
      <button
        onClick={handleTogglePriority}
        className={`${styles.button} ${styles.buttonToggle}`}
      >
        Изменить приоритет
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
        <Modal
          title="Редактировать задачу"
          task={{ id, title, text, completed, date, priority }}
          onClose={() => setIsEditing(false)}
          isEditMode={true}
        />
      )}
    </li>
  );
}

export default TodoItem;
