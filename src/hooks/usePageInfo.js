import { useLocation } from "react-router-dom";

const usePageInfo = () => {
  const { pathname } = useLocation();

  const regex = /^\/listings\/[a-f0-9]{24}$/;

  const isHomePage = pathname === "/";
  const isSingleListingPage = regex.test(pathname);
  const isMyReservationsPage = pathname === "/account/reservations";
  const isMyFavoritesPage = pathname === "/account/favorites";
  const isMyListingsBookingsPage = pathname === "/account/listings-bookings";
  const isMyListingsPage = pathname === "/account/listings";
  const isAccountsPage =
    isMyReservationsPage ||
    isMyFavoritesPage ||
    isMyListingsBookingsPage ||
    isMyListingsPage;

  return {
    isHomePage,
    isSingleListingPage,
    isAccountsPage,
    isMyReservationsPage,
    isMyFavoritesPage,
    isMyListingsBookingsPage,
    isMyListingsPage,
  };
};

export default usePageInfo;
