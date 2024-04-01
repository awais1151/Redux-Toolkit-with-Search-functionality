// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export { store }; // Correct export statement
