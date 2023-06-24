import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  type: 'text',
  valueFrom: '',
  valueTo: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setTypeDate: (state, action) => {
      if (action.payload.type === "date") return;

      if (action.payload.value) {
        const date = moment(action.payload.value, 'DD.MM.YYYY').format('YYYY-MM-DD');
        action.payload.id === 'dateFrom' ? state.valueFrom = date : state.valueTo = date;
      }

      state.type = "date";
    },

    setTypeText: (state, action) => {
      const date = moment(action.payload).format('DD.MM.YYYY');
      state.value = date;
      state.type = "text";
    },

    setValueFrom: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTypeDate, setTypeText, setValueFrom } = inputSlice.actions;
export default inputSlice.reducer;