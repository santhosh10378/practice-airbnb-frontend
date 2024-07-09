import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../context/userReducer";
import modalReducer from "../context/modalReducer";
import menuReducer from "../context/menuReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    modals: modalReducer,
    menus: menuReducer,
  },
});

export default store;
