import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  errorMessage: null,
  successMessage: null,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadingState: (state) => {
      state.loading = true;
      state.errorMessage = null;
      state.successMessage = null;
      state.user = null;
    },
    successState: (state, action) => {
      state.loading = false;
      state.errorMessage = null;
      state.successMessage = action.payload;
      state.user = null;
    },
    errorState: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
      state.successMessage = null;
      state.user = null;
    },
    userState: (state, action) => {
      state.loading = false;
      state.errorMessage = null;
      state.successMessage = null;
      state.user = action.payload;
    },
  },
});

export const { loadingState, successState, errorState, userState } =
  userReducer.actions;
export default userReducer.reducer;
