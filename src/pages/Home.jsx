import { useLocation } from "react-router-dom";
import ListingContainer from "../components/ListingContainer";
import ListingCard from "../components/listing/ListingCard";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { search } = useLocation();
  const { data: listings } = useFetch({
    url: `/listings/${search.toString()}`,
  });

  return (
    <div>
      <ListingContainer>
        {listings?.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </ListingContainer>
    </div>
  );
};

export default Home;
