import { Task } from "./types";

const titles = [
  "Проверить почту",
  "Пройтись на свежем воздухе",
  "Сделать запись в дневнике",
  "Послушать музыку",
  "Проверить расписание",
];

const texts = [
  "Это поможет расслабиться",
  "Полезно для здоровья",
  "Успокаивает мысли",
  "Улучшает настроение",
  "Не забудь перед сном",
];

const priorities = ["low", "medium", "high"] as const;

export function generateRandomTask(): Task {
  const randomIndex = () => Math.floor(Math.random() * 5);

  return {
    id: Date.now().toString(),
    title: titles[randomIndex()],
    text: texts[randomIndex()],
    completed: "newTask",
    date: new Date().toISOString().split("T")[0],
    priority: priorities[Math.floor(Math.random() * priorities.length)],
  };
}
