import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/todoSlice";
import { useState } from "react";
import styles from "./AddForm.module.css";
import { Task } from "../../../utils/types";

function AddForm() {
  const dispatch = useDispatch();

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

    const newTask: Task = {
      id: Date.now().toString(),
      ...task,
    };

    dispatch(addTodo(newTask));
    setTask({
      title: "",
      text: "",
      completed: "newTask",
      date: new Date().toISOString().split("T")[0],
    });
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="title"
        placeholder="Название задачи"
        value={task.title}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles.input}
      />
      <textarea
        name="text"
        placeholder="Описание"
        value={task.text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles.textarea}
      />
      <button type="submit" className={styles.button}>
        Добавить!
      </button>
    </form>
  );
}

export default AddForm;
