import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  from: '',
  to: '',
  there: '',
  back: '',
};

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setDate: (state, action) => {
      if (action.payload.id === 'dateFrom') {
        state.from = action.payload.value;
        if (!state.to) state.to = action.payload.value;
      } else {
        state.to = action.payload.value;
      }
    },

    setInitialFromTo: (state, action) => {
      state.from = initialState.from;
      state.to = initialState.to;
    },
  },
});

export const { setDate, setInitialFromTo } = dateSlice.actions;
export default dateSlice.reducer;