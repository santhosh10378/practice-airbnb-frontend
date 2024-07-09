import ListingContainer from "../components/ListingContainer";
import ListingCard from "../components/listing/ListingCard";
import useFetch from "../hooks/useFetch";

const MyFavorites = () => {
  const { data: favorites } = useFetch({
    url: "/favorites",
  });

  console.log(favorites);

  return (
    <div>
      <ListingContainer>
        {favorites?.map((favorite) => (
          <ListingCard key={favorite.id} listing={favorite?.listing} />
        ))}
      </ListingContainer>
    </div>
  );
};

export default MyFavorites;
