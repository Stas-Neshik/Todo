import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Modal.module.css";
import { editTodo, addTodo } from "../../../store/todoSlice";
import { Task } from "../../../utils/types";

type ModalProps = {
  title: string;
  task?: Task;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  isEditMode?: boolean;
  children?: React.ReactNode;
};

function Modal({
  title,
  task,
  onClose,
  onConfirm,
  confirmText,
  isEditMode = false,
}: ModalProps) {
  const dispatch = useDispatch();
  const [editedTask, setEditedTask] = useState({
    title: task?.title || "",
    text: task?.text || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isEditMode && task) {
      const updatedTask: Task = {
        ...task,
        title: editedTask.title,
        text: editedTask.text,
      };
      dispatch(editTodo(updatedTask));
    } else {
      const newTask: Task = {
        id: Date.now().toString(),
        title: editedTask.title,
        text: editedTask.text,
        completed: "newTask",
        date: new Date().toISOString().split("T")[0],
        priority: "medium",
      };
      dispatch(addTodo(newTask));
    }
    onClose();
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
        <h2 className={styles.title}>{title}</h2>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        {isEditMode ? (
          <form onSubmit={handleSubmit}>
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

            <div className={styles.modalFooter}>
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
        ) : (
          <>
            <img
              className={styles.image}
              src="https://img.freepik.com/premium-photo/middleaged-woman-portrait-studio-setting-looking-sideways-with-doubtful-skeptical-expression_1187-409008.jpg?w=1380"
            ></img>
            <div className={styles.modalFooter}>
              <button onClick={onConfirm} className={styles.buttonConfirm}>
                {confirmText || "ОК"}
              </button>
              <button onClick={onClose} className={styles.buttonCancel}>
                Отмена
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
