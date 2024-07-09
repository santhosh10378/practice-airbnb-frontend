import ListingContainer from "../components/ListingContainer";
import ListingCard from "../components/listing/ListingCard";
import useAuth from "../hooks/useAuth";
import useFetch from "../hooks/useFetch";

const MyListingBookings = () => {
  const { user } = useAuth();
  const { data: reservations } = useFetch({
    url: "/reservations",
    params: { hostId: user?.id },
  });
  console.log(reservations);

  return (
    <div>
      <ListingContainer>
        {reservations?.map((reservation) => (
          <ListingCard
            key={reservation.id}
            listing={reservation?.listing}
            reservation={reservation}
          />
        ))}
      </ListingContainer>
    </div>
  );
};

export default MyListingBookings;
