import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useMutation from "../../hooks/useMutation";

const FavoriteIcon = ({ listing }) => {
  const { user, getCurrentUser } = useAuth();
  const { mutateData } = useMutation();

  const favoriteIds = user?.favorites?.map((favorite) => favorite?.listingId);
  const [isFavorited, setIsFavorited] = useState(
    favoriteIds?.includes(listing?.id)
  );

  useEffect(() => {
    setIsFavorited(favoriteIds?.includes(listing?.id));
  }, [favoriteIds, listing?.id]);

  const onFavorite = async () => {
    setIsFavorited((prev) => !prev);
    try {
      await mutateData({
        method: "POST",
        url: "/favorites",
        requestData: { listingId: listing?.id },
      });
      await getCurrentUser(); // Refresh user data to get updated favorites
    } catch (error) {
      console.error("Error updating favorite status", error);
      // Revert the favorite status in case of an error
      setIsFavorited((prev) => !prev);
    }
  };

  return (
    <svg
      onClick={onFavorite}
      xmlns="http://www.w3.org/2000/svg"
      fill={isFavorited ? "#F43F5D" : "rgba(0, 0, 0, 0.5)"}
      stroke="white"
      strokeWidth="2"
      aria-hidden="true"
      display="block"
      overflow="visible"
      viewBox="0 0 32 32"
      style={{ height: 24, width: 24, cursor: "pointer" }} // Added cursor pointer for better UX
    >
      <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 00-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 00-9.9 0A6.98 6.98 0 002 11c0 7 7 12.27 14 17z"></path>
    </svg>
  );
};

export default FavoriteIcon;
