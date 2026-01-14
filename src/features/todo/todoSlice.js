import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, title: "learn redux" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log("action.payload");
      console.log(action.payload);
      console.log("action.payload");

      const todo = {
        id: nanoid(),
        title: action.payload.title,
      };
      state.todos.push(todo);
      console.log(state.todos);
      console.log("state.todos");
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id == action.payload);
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
      }
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
