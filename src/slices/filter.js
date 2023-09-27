import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limits: {
    5: true,
    10: false,
    20: false,
  },
  sort: 'времени',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setViewLimit: (state, action) => {
      state.limits = {
        5: false,
        10: false,
        20: false,
      };
      state.limits[action.payload] = true;
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setViewLimit, setSort } = filterSlice.actions;
export default filterSlice.reducer;