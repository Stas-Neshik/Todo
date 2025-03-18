import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../utils/types";


export type Todos = Task[];

const initialState: Task[] = [
  {
    id: "1",
    title: "Купить продукты",
    text: "Купить хлеб, молоко и яйца",
    completed: false,
  },
  {
    id: "2",
    title: "Выучить Redux",
    text: "Разобраться с RTK, useSelector и useDispatch",
    completed: false,
  },
  {
    id: "3",
    title: "Позаниматься спортом",
    text: "Сделать зарядку 15 минут",
    completed: true,
  },
];

const todosSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Task>) => {
      const newTodo = action.payload;
      state.unshift(newTodo);
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action: PayloadAction<Task>) => {
      const task = state.find((todo) => todo.id === action.payload.id);

      if (task) {
        task.title = action.payload.title;
        task.text = action.payload.text;
      };
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
