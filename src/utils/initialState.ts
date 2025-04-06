import { TodoState } from "./types";

export const initialState: TodoState = {
  tasks: [
    {
      id: "1",
      title: "Купить продукты",
      text: "Купить хлеб, молоко и яйца",
      completed: "Done",
      date: "2025-04-01",
      priority: "medium",
    },
    {
      id: "2",
      title: "Выучить Redux",
      text: "Разобраться с RTK, useSelector и useDispatch",
      completed: "Done",
      date: "2025-04-02",
      priority: "high",
    },
    {
      id: "3",
      title: "Позаниматься спортом",
      text: "Сделать зарядку 15 минут",
      completed: "Done",
      date: "2025-04-05",
      priority: "low",
    },
  ],
  filter: "all",
  sort: "none",
};
