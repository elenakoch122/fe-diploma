import { configureStore } from "@reduxjs/toolkit";
import dateReducer from '../slices/date';
import stagesReducer from '../slices/stages';
import filterReducer from '../slices/filter';
import ratingReducer from '../slices/rating';

export const store = configureStore({
  reducer: {
    date: dateReducer,
    stages: stagesReducer,
    filter: filterReducer,
    rating: ratingReducer,
  },
});