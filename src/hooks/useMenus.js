import { useDispatch, useSelector } from "react-redux";
import {
  toggleUserMenuState,
  toggleReserveMenuState,
} from "../context/menuReducer";

const useMenus = () => {
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.menus);

  const toggleUserMenu = () => {
    dispatch(toggleUserMenuState());
  };

  const toggleReserveMenu = () => {
    dispatch(toggleReserveMenuState());
  };

  return { ...menus, toggleUserMenu, toggleReserveMenu };
};

export default useMenus;
