import {
  toggleLogin,
  toggleRegister,
  switchAuth,
  toggleSearch,
  toggleNewListing,
  toggleListingUpdate,
} from "../context/modalReducer";
import { useDispatch, useSelector } from "react-redux";

const useModals = () => {
  const dispatch = useDispatch();
  const modals = useSelector((state) => state.modals);

  const toggleLoginModal = () => {
    dispatch(toggleLogin());
  };

  const toggleRegisterModal = () => {
    dispatch(toggleRegister());
  };

  const switchAuthModal = () => {
    dispatch(switchAuth());
  };

  const toggleSearchModal = () => {
    dispatch(toggleSearch());
  };

  const toggleNewListingModal = () => {
    dispatch(toggleNewListing());
  };

  const toggleListingUpdateModal = () => {
    dispatch(toggleListingUpdate());
  };

  return {
    ...modals,
    toggleLoginModal,
    toggleRegisterModal,
    switchAuthModal,
    toggleSearchModal,
    toggleNewListingModal,
    toggleListingUpdateModal,
  };
};

export default useModals;
