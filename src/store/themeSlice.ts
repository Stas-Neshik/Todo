import { createSlice } from "@reduxjs/toolkit";

type TTheme = "light" | "dark";

const systemTheme: TTheme = window.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? "dark"
  : "light";

const initialState: TTheme =
  (localStorage.getItem("theme") as TTheme) || systemTheme;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
