import { LuMenu } from "react-icons/lu";
import UserLinks from "./UserLinks";
import useModals from "../../hooks/useModals";
import Avatar from "../Avatar";
import useAuth from "../../hooks/useAuth";
import useMenus from "../../hooks/useMenus";

const UserMenu = () => {
  const { user } = useAuth();
  const { toggleNewListingModal, toggleLoginModal } = useModals();
  const { isUserMenuOpen, toggleUserMenu } = useMenus();

  const onClick = () => {
    if (!user) {
      toggleLoginModal();
    } else {
      toggleNewListingModal();
    }
  };

  return (
    <div className="flex items-center justify-end gap-3 md:w-auto lg:flex-1">
      <div
        onClick={onClick}
        className="hidden cursor-pointer rounded-full p-3 text-sm font-medium transition hover:bg-neutral-100 md:block"
      >
        Airbnb your home
      </div>

      <div
        onClick={toggleUserMenu}
        className="flex cursor-pointer items-center gap-2 rounded-full border p-[10px] transition"
      >
        <LuMenu size={22} />
        <Avatar image={user?.profileImg} />
      </div>

      {isUserMenuOpen && <UserLinks toggleUserMenu={toggleUserMenu} />}
    </div>
  );
};

export default UserMenu;
