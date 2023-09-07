import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  1: { name: 'Билеты', color: '#FFA800' },
  2: { name: 'Пассажиры', color: '#3E3C41' },
  3: { name: 'Оплата', color: '#3E3C41' },
  4: { name: 'Проверка', color: '#3E3C41' },
};

const stagesSlice = createSlice({
  name: 'stages',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state[action.payload].color = '#FFA800';
      for (let i = action.payload + 1; i <= Object.keys(state).length; i++) {
        state[i].color = '#3E3C41';
      }
    },
  },
});

export const { setColor } = stagesSlice.actions;
export default stagesSlice.reducer;