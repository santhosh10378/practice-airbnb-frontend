import { useNavigate } from "react-router-dom";
import FavoriteIcon from "./FavoriteIcon";

const ListingImage = ({ listing }) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
      <img
        onClick={() => {
          navigate(`/listings/${listing?.id}`);
        }}
        src={listing?.images[0]}
        alt="listingImage"
        className="w-full h-full object-cover transition hover:scale-105 cursor-pointer"
      />
      <div className="absolute right-3 top-3 z-10 cursor-pointer">
        <FavoriteIcon listing={listing} />
      </div>
    </div>
  );
};

export default ListingImage;
