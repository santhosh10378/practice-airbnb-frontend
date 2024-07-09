import useModals from "../../hooks/useModals";
import ListingSearchForm from "../forms/search/ListingSearchForm";
import Modal from "./Modal";

const SearchModal = () => {
  const { toggleSearchModal } = useModals();

  const body = (
    <>
      <ListingSearchForm />
    </>
  );

  return (
    <>
      <Modal title="Filters" closeModal={toggleSearchModal} body={body} />
    </>
  );
};

export default SearchModal;
