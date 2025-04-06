import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/todoSlice";
import { useEffect, useState } from "react";
import styles from "./AddForm.module.css";
import { Task } from "../../../utils/types";
import Modal from "../../UI/Modal/Modal";
import { generateRandomTask } from "../../../utils/randomTasks";

function AddForm() {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [task, setTask] = useState<Omit<Task, "id">>({
    title: "",
    text: "",
    completed: "newTask",
    date: "",
    priority: "medium",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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
      priority: "medium",
    });
    setIsModalOpen(false);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomTask = generateRandomTask();
      dispatch(addTodo(newRandomTask));
    }, 2 * 10000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <>
      {isModalOpen && (
        <Modal
          title="Подтвердите добавление"
          onClose={() => setIsModalOpen(false)}
          onConfirm={confirmAddTask}
        ></Modal>
      )}

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
        <p className={styles.priorityLabel}>Установите приоритет</p>
        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="low">Низкий</option>
          <option value="medium">Средний</option>
          <option value="high">Высокий</option>
        </select>
        <button type="submit" className={styles.button}>
          Добавить!
        </button>
      </form>
    </>
  );
}

export default AddForm;
