import { configureStore } from "@reduxjs/toolkit";
import dateReducer from '../slices/date';
import stagesReducer from '../slices/stages';

export const store = configureStore({
  reducer: {
    date: dateReducer,
    stages: stagesReducer,
  },
});