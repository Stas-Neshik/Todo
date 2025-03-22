import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/todoSlice";
import { useState } from "react";
import styles from "./AddForm.module.css";
import { Task } from "../../../utils/types";
import Modal from "../../UI/Modal/Modal";

function AddForm() {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [task, setTask] = useState<Omit<Task, "id">>({
    title: "",
    text: "",
    completed: "newTask",
    date: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!task.title.trim() || !task.text.trim()) return;

    setIsModalOpen(true);
  }

  function confirmAddTask() {
    const newTask: Task = {
      ...task,
      date: new Date().toISOString().split("T")[0],
      id: Date.now().toString(),
    };

    dispatch(addTodo(newTask));

    setTask({
      title: "",
      text: "",
      completed: "newTask",
      date: "",
    });
    setIsModalOpen(false);
  }

  return (
    <>
      {isModalOpen && (
        <Modal
          title="Подтвердите добавление"
          onClose={() => setIsModalOpen(false)}
          onConfirm={confirmAddTask}
        >
          <p>Вы действительно хотите добавить эту задачу?</p>
        </Modal>
      )}

      {/* Форма для добавления задачи */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Название задачи"
          value={task.title}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="text"
          placeholder="Описание"
          value={task.text}
          onChange={handleChange}
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>
          Добавить!
        </button>
      </form>
    </>
  );
}

export default AddForm;
