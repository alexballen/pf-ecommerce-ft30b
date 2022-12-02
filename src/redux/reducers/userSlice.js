import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userStates",
  initialState: {
    isAuthenticated: false,
    loggedUser: {},
    favorites: [],
    users: [],
  },
  reducers: {
    loggedUser: (state, action) => {
      state.isAuthenticated = true;
      state.loggedUser = action.payload;
    },
    getFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    allUser: (state, action) => {
      state.users = action.payload;
    },
    deleteUser(state, action) {
      const delPro = state.filterUser.filter((e) => e.id !== action.payload);
      state.users = delPro;
    },
    searchByUser(state, action) {
      state.users = action.payload;
    },
    sortUser: (state, action) => {
      const orderFullname =
        action.payload === "Asc"
          ? state.users.sort((a, b) => (a.email > b.email ? 1 : -1))
          : state.users.sort((a, b) => (a.email > b.email ? -1 : 1));
      state.users = [...orderFullname];
    },
  },
});

export const {
  loggedUser,
  getFavorites,
  allUser,
  deleteUser,
  searchByUser,
  sortUser,
} = userSlice.actions;
export default userSlice.reducer;
