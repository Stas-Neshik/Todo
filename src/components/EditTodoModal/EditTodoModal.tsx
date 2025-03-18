import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./EditTodoModal.module.css";
import { editTodo } from "../../store/todoSlice";
import { Task } from "../../utils/types";

type EditTodoModalProps = {
  task: Task;
  onClose: () => void;
};

function EditTodoModal({ task, onClose }: EditTodoModalProps) {
  const dispatch = useDispatch();
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    text: task.text,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const updatedTask: Task = {
      ...task, 
      title: editedTask.title,
      text: editedTask.text,
    };
    dispatch(editTodo(updatedTask));
    onClose(); 
  };

  const handleSubmitKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Редактировать задачу</h2>
        <button className={styles.closeButton} onClick={onClose}>
            ✖
          </button>
          <form onSubmit={handleSubmit} onKeyDown={handleSubmitKey}>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            className={styles.input}
          />
          <textarea
            name="text"
            value={editedTask.text}
            onChange={handleChange}
            className={styles.textarea}
          />
          
          <div className={styles.buttons}>
            <button type="submit" className={styles.buttonSave}>
              Сохранить
            </button>
            <button
              type="button"
              onClick={onClose}
              className={styles.buttonCancel}
            >
              Отмена
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditTodoModal;
