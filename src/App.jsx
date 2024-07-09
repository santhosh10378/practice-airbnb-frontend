import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import MyListings from "./pages/MyListings";
import MyListingBookings from "./pages/MyListingBookings";
import MyReservations from "./pages/MyReservations";
import MyFavorites from "./pages/MyFavorites";
import SingleListing from "./pages/SingleListing";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/listings/:id",
          element: <SingleListing />,
        },
        {
          path: "/account/listings",
          element: <MyListings />,
        },
        {
          path: "/account/favorites",
          element: <MyFavorites />,
        },
        {
          path: "/account/reservations",
          element: <MyReservations />,
        },
        {
          path: "/account/listings-bookings",
          element: <MyListingBookings />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
