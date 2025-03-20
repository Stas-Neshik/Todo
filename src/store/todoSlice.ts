import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../utils/types";
import { initialState } from "../utils/initialState";

const todosSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Task>) => {
      const newTodo = action.payload;
      state.tasks.unshift(newTodo);
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        tasks: state.tasks.filter((todo) => todo.id !== action.payload),
      };
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        if (task.completed === "newTask") {
          task.completed = "inProgress";
        } else if (task.completed === "inProgress") {
          task.completed = "Done";
        } else if (task.completed === "Done") {
          task.completed = "newTask";
        }
      }
      console.log(task?.completed);
    },
    editTodo: (state, action: PayloadAction<Task>) => {
      const task = state.tasks.find((todo) => todo.id === action.payload.id);

      if (task) {
        task.title = action.payload.title;
        task.text = action.payload.text;
      }
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, editTodo, setSort } =
  todosSlice.actions;
export default todosSlice.reducer;
