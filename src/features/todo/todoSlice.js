import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, title: "learn redux" }],
  currentEditingId: null,
  isEditing: false,
};

export const getTodoById = (state, id) => {
  return state.todos.find((todo) => todo.id === id);
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
      }
      state.isEditing = false;
      state.currentEditingId = null;
    },
    updateInitiate: (state, action) => {
      state.isEditing = true;
      state.currentEditingId = action.payload.id;
    },
  },
});

export const { addTodo, updateTodo, removeTodo, updateInitiate } =
  todoSlice.actions;

export default todoSlice.reducer;
