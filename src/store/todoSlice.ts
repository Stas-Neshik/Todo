import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type Task = {
  id: string;
  title: string;
  text: string;
  completed: boolean;
};

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
  },
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
