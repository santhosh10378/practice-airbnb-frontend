import useModals from "../../hooks/useModals";
import ListingUpdateForm from "../forms/listing/ListingUpdateForm";
import Modal from "./Modal";

const ListingUpdateModal = () => {
  const { toggleListingUpdateModal } = useModals();

  const body = (
    <>
      <ListingUpdateForm />
    </>
  );

  return (
    <>
      <Modal
        title="Airbnb your home"
        closeModal={toggleListingUpdateModal}
        body={body}
      />
    </>
  );
};

export default ListingUpdateModal;
