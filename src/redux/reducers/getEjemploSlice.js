import { createSlice } from "@reduxjs/toolkit";

const ejemploSlice = createSlice({
  name: "ejemploAll",
  initialState: {
    ejemplo: [],
  },
  reducers: {
    getEjemplo: (state, action) => {
      state.ejemplo = [];
    },
  },
});

export const { getEjemplo } = ejemploSlice.actions;
export default ejemploSlice.reducer;
