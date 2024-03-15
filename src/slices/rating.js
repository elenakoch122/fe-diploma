import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stars: 5,
  rating: 0,
  current: 1,
};

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setRating: (state, action) => {
      state.rating = action.payload;
    },
  },
});

export const { setRating } = ratingSlice.actions;
export default ratingSlice.reducer;