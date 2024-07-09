import { useNavigate } from "react-router-dom";
import LogoFull from "../svg/LogoFull";
import LogoIcon from "../svg/LogoIcon";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer text-rose-500 lg:flex-1"
      onClick={() => navigate("/")}
    >
      <div className="hidden md:block xl:hidden">
        <LogoIcon />
      </div>
      <div className="hidden xl:block">
        <LogoFull />
      </div>
    </div>
  );
};

export default Logo;
