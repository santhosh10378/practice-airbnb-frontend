import navLinks from "../../constants/navLinks";
import useAuth from "../../hooks/useAuth";
import useModals from "../../hooks/useModals";
import MenuCard from "./MenuCard";
import { useNavigate } from "react-router-dom";

const UserLinks = ({ toggleUserMenu }) => {
  const { toggleRegisterModal, toggleLoginModal } = useModals();
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  return (
    <div className="absolute right-0 top-[75px] z-50 w-[40%] overflow-hidden rounded-xl bg-white shadow-md md:right-0 md:top-[65px] md:w-auto min-w-[10%]">
      {!user && (
        <>
          <MenuCard label="Sign Up" onClick={toggleRegisterModal} />
          <MenuCard label="Sign In" onClick={toggleLoginModal} />
        </>
      )}

      {user && (
        <>
          {navLinks.map((item, i) => (
            <MenuCard
              key={i}
              label={item.label}
              onClick={() => {
                navigate(item.path);
                toggleUserMenu();
              }}
            />
          ))}
          <hr />
          <MenuCard label="Sign Out" onClick={logoutUser} />
        </>
      )}
    </div>
  );
};

export default UserLinks;
