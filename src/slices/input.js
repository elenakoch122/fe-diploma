import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

// const initialState = {
//   type: 'text',
//   valueFrom: '',
//   valueTo: '',
// };

const initialState = {
  from: {
    type: 'text',
    value: '',
  },
  to: {
    type: 'text',
    value: '',
  },
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setTypeDate: (state, action) => {
      if (action.payload.type === "date") return;

      if (action.payload.value) {
        const date = moment(action.payload.value, 'DD.MM.YYYY').format('YYYY-MM-DD');
        action.payload.id === 'dateFrom' ? state.from.value = date : state.to.value = date;
      }

      action.payload.id === 'dateFrom' ? state.from.type = "date" : state.to.type = "date";
    },

    setTypeText: (state, action) => {
      const date = moment(action.payload.value).format('DD.MM.YYYY');
      action.payload.id === 'dateFrom' ? state.from.type = "text" : state.to.type = "text";
      action.payload.id === 'dateFrom' ? state.from.value = date : state.to.value = date;
    },

    setValue: (state, action) => {
      action.payload.id === 'dateFrom' ? state.from.value = action.payload.value : state.to.value = action.payload.value;
    },

    // setValueFrom: (state, action) => {
    //   state.valueFrom = action.payload;
    // },

    // setValueTo: (state, action) => {
    //   state.valueTo = action.payload;
    // },
  },
});

export const { setTypeDate, setTypeText, setValueFrom, setValueTo, setValue } = inputSlice.actions;
export default inputSlice.reducer;