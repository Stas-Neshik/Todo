import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
