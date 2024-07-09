import { FaUserCircle } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const Avatar = ({ image, className, iconSize }) => {
  return (
    <>
      {image ? (
        <img
          src={image}
          alt="user image"
          className={twMerge("size-12 rounded-full object-cover", className)}
        />
      ) : (
        <FaUserCircle size={iconSize || 27} className="text-neutral-400" />
      )}
    </>
  );
};

export default Avatar;
