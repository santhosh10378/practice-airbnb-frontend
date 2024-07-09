import { useState, useEffect } from "react";

const ListingGrid = ({ listing }) => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsMediumScreen(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMediumScreen(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      className={`grid ${isMediumScreen ? "grid-cols-4" : "grid-cols-1"} gap-3`}
    >
      {listing?.images?.slice(0, isMediumScreen ? 5 : 1).map((image, i) => (
        <div
          key={i}
          className={`${
            isMediumScreen && i === 0
              ? "col-span-2 row-span-2"
              : "col-span-1 row-span-1"
          } w-full aspect-video overflow-hidden rounded-xl`}
        >
          <img
            src={image}
            alt="Listing Image"
            className="w-full h-full object-cover transition hover:scale-105 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default ListingGrid;
