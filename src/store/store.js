import { configureStore } from "@reduxjs/toolkit";
import dateReduser from '../slices/date';

export const store = configureStore({
  reducer: {
    date: dateReduser,
  },
});