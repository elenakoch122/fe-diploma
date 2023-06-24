import { configureStore } from "@reduxjs/toolkit";
import inputReduser from '../slices/input';

export const store = configureStore({
  reducer: {
    input: inputReduser,
  },
});