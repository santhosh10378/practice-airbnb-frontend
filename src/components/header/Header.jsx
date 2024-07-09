import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <div className="relative flex items-center justify-between gap-2 py-4 lg:gap-0">
      <Logo />
      <Search />
      <UserMenu />
    </div>
  );
};

export default Header;
