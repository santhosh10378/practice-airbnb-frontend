import ListingCard from "../components/listing/ListingCard";
import useAuth from "../hooks/useAuth";
import useFetch from "../hooks/useFetch";

const MyListings = () => {
  const { user } = useAuth();
  const { data: listings } = useFetch({
    url: "/listings",
    params: { hostId: user?.id },
  });
  console.log(listings);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {listings?.map((listing) => (
          <ListingCard key={listing.id} listing={listing} myListing />
        ))}
      </div>
    </div>
  );
};

export default MyListings;
