import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export type TypeTodo = {
  text: string;
  isCompleted: boolean;
  id: string;
};

type TypeTodoState = {
  todos: TypeTodo[];
};

const initialState: TypeTodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        text: action.payload,
        isCompleted: false,
        id: uuidv4(),
      });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    resetTodos: (state) => {
      state.todos = [];
    },
    completeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      );
    },
    removeCompletedTodo: (state) => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  resetTodos,
  completeTodo,
  removeCompletedTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
