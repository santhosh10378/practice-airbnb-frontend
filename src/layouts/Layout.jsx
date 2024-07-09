import { Outlet } from "react-router-dom";
import { useEffect, useMemo } from "react";

import Container from "../components/Container";
import Header from "../components/header/Header";
import Heading from "../components/Heading";
import usePageInfo from "../hooks/usePageInfo";
import useModals from "../hooks/useModals";
import LoginModal from "../components/modals/LoginModal";
import SearchModal from "../components/modals/SearchModal";
import NewListingModal from "../components/modals/NewListingModal";
import ListingUpdateModal from "../components/modals/ListingUpdateModal";
import RegisterModal from "../components/modals/RegisterModal";
import Categories from "../components/header/Categories";
import useAuth from "../hooks/useAuth";

const Layout = () => {
  const {
    isAccountsPage,
    isHomePage,
    isMyReservationsPage,
    isMyFavoritesPage,
    isMyListingsBookingsPage,
    isMyListingsPage,
  } = usePageInfo();
  const { getCurrentUser } = useAuth();

  const {
    isLoginModalOpen,
    isRegisterModalOpen,
    isSearchModalOpen,
    isNewListingModalOpen,
    isListingUpdateModalOpen,
  } = useModals();

  console.log("Layout");

  useEffect(() => {
    getCurrentUser();
  }, []);

  const variant = useMemo(() => {
    let vCheck;

    if (isMyReservationsPage) {
      vCheck = "myReservations";
    }

    if (isMyFavoritesPage) {
      vCheck = "myFavorites";
    }

    if (isMyListingsBookingsPage) {
      vCheck = "myListingsBookings";
    }

    if (isMyListingsPage) {
      vCheck = "myListingsPage";
    }

    return vCheck;
  }, [
    isMyReservationsPage,
    isMyFavoritesPage,
    isMyListingsBookingsPage,
    isMyListingsPage,
  ]);

  return (
    <>
      <header className="bg-white fixed top-0 left-0 w-full z-50">
        <div className="border-b">
          <Container>
            <Header />
          </Container>
        </div>
        {isHomePage && (
          <div>
            <Container>
              <Categories />
            </Container>
          </div>
        )}
      </header>

      <main className={`min-h-screen pb-5 ${isHomePage ? "pt-48" : "pt-28"}`}>
        <Container>
          {isAccountsPage && (
            <Heading
              variant={variant}
              titleClass="text-2xl"
              subtitleClass="text-base"
              className="mb-5"
            />
          )}
          <Outlet />
        </Container>

        {isLoginModalOpen && <LoginModal />}
        {isRegisterModalOpen && <RegisterModal />}
        {isNewListingModalOpen && <NewListingModal />}
        {isListingUpdateModalOpen && <ListingUpdateModal />}
        {isSearchModalOpen && <SearchModal />}
      </main>
    </>
  );
};

export default Layout;
