import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserMenuOpen: false,
  isReserveMenuOpen: false,
};

const menuSlice = createSlice({
  name: "menus",
  initialState,
  reducers: {
    toggleUserMenuState(state) {
      state.isUserMenuOpen = !state.isUserMenuOpen;
    },
    toggleReserveMenuState(state) {
      state.isReserveMenuOpen = !state.isReserveMenuOpen;
    },
  },
});

export const { toggleUserMenuState, toggleReserveMenuState } =
  menuSlice.actions;

export default menuSlice.reducer;
