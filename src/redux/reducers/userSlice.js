import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userStates",
  initialState: {
    loggedUser:[]
  },
  reducers: {
    loggedUser: (state, action) => {
      state.loggedUser = action.payload;
    },
    
}});

export const {
  loggedUser,
} = userSlice.actions;
export default userSlice.reducer;
