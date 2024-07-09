import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
  isSearchModalOpen: false,
  isNewListingModalOpen: false,
  isListingUpdateModalOpen: false,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    toggleLogin(state) {
      state.isLoginModalOpen = !state.isLoginModalOpen;
    },
    toggleRegister(state) {
      state.isRegisterModalOpen = !state.isRegisterModalOpen;
    },
    toggleSearch(state) {
      state.isSearchModalOpen = !state.isSearchModalOpen;
    },
    toggleNewListing(state) {
      state.isNewListingModalOpen = !state.isNewListingModalOpen;
    },
    toggleListingUpdate(state) {
      state.isListingUpdateModalOpen = !state.isListingUpdateModalOpen;
    },
    switchAuth(state) {
      state.isLoginModalOpen = !state.isLoginModalOpen;
      state.isRegisterModalOpen = !state.isRegisterModalOpen;
    },
  },
});

export const {
  toggleLogin,
  toggleRegister,
  toggleSearch,
  toggleNewListing,
  toggleListingUpdate,
  switchAuth,
} = modalSlice.actions;

export default modalSlice.reducer;
