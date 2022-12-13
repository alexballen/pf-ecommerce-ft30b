import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userStates",
  initialState: {
    isAuthenticated: false,
    loggedUser: {},
    favorites: [],
    users: [],
    filterUser: [],
    banerUser: [],
    userAddress:[],
  },
  reducers: {
    loggedUser: (state, action) => {
      state.isAuthenticated = true;
      state.loggedUser = action.payload;
    },
    getFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    getCountries: (state, action) => {
      state.countries = action.payload;
    },
    allUser: (state, action) => {
      state.users = action.payload;
      state.filterUser = action.payload;
    },
    deleteUser(state, action) {
      const delUser = state.filterUser.filter((e) => e.id !== action.payload);
      state.users = delUser;
    },
    searchByUser(state, action) {
      let filtUser = state.filterUser.filter((us) =>
        us.username.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.users = filtUser;
    },
    sortUser: (state, action) => {
      const orderFullname =
        action.payload === "Asc"
          ? state.users.sort((a, b) => (a.email > b.email ? 1 : -1))
          : state.users.sort((a, b) => (a.email > b.email ? -1 : 1));
      state.users = [...orderFullname];
    },
    baneoUser(state, action) {
      const banUser = state.filterUser.filter((e) => e.id !== action.payload);
      state.users = banUser;
    },
    restoreBanUser(state, action) {
      const objAction = state.filterUser.filter((e) => e);
      state.users = objAction;
    },
    getBanUser(state, action) {
      state.banerUser = action.payload;
    },
<<<<<<< HEAD
    createUserAddress(state, action) {
      state.userAddress = action.payload;
    },
    updateUser(state, action) {
      state.loggedUser = action.payload;
=======
    deleteRestoreUser(state, action) {
      const delRes = state.banerUser.filter((e) => e.id !== action.payload);
      state.banerUser = delRes;
>>>>>>> 19c278a69de620f600d8eb64d2c4867299501566
    },
  },
});

export const {
  loggedUser,
  getFavorites,
  getCountries,
  allUser,
  deleteUser,
  searchByUser,
  sortUser,
  baneoUser,
  restoreBanUser,
<<<<<<< HEAD
  getBanerUser,
  createUserAddress
=======
  getBanUser,
  deleteRestoreUser,
>>>>>>> 19c278a69de620f600d8eb64d2c4867299501566
} = userSlice.actions;
export default userSlice.reducer;
