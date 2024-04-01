 // src/features/todoSlice.js

import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    selectedTodo: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload;
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
      state.selectedTodo = null; // Reset selectedTodo after update
    },
  },
});

export const { addTodo, updateSelectedTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
