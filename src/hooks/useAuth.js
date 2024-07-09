import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import {
  loadingState,
  successState,
  errorState,
  userState,
} from "../context/userReducer";
import axiosClient from "../utils/axiosClient";

const useAuth = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getCurrentUser = async () => {
    dispatch(loadingState());
    try {
      const response = await axiosClient.get("/auth/profile");
      dispatch(userState(response.data));
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch user profile";
      console.error("Get Current User Error:", error);
      dispatch(errorState(errorMessage));
      toast.error(errorMessage);
    }
  };

  const registerUser = async (userData) => {
    dispatch(loadingState());
    try {
      const response = await axiosClient.post("/auth/sign-up", userData);
      dispatch(successState(response.data.message));
      toast.success(response.data.message);
      await getCurrentUser();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Registration failed";
      console.error("Register User Error:", error);
      dispatch(errorState(errorMessage));
      toast.error(errorMessage);
    }
  };

  const loginUser = async (userData) => {
    dispatch(loadingState());
    try {
      const response = await axiosClient.post("/auth/sign-in", userData);
      dispatch(successState(response.data.message));
      toast.success(response.data.message);
      await getCurrentUser(); // Refresh current user after login
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed";
      console.error("Login User Error:", error);
      dispatch(errorState(errorMessage));
      toast.error(errorMessage);
    }
  };

  const logoutUser = async () => {
    dispatch(loadingState());
    try {
      const response = await axiosClient.post("/auth/sign-out");
      if (response.data) {
        toast.success(response.data.message);
        dispatch(successState(response.data.message));
        await getCurrentUser();
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Logout failed";
      console.error("Logout User Error:", error);
      toast.error(errorMessage);
      dispatch(errorState(errorMessage));
    }
  };

  return {
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    ...user,
  };
};

export default useAuth;
