import useModals from "../../hooks/useModals";
import NewListingForm from "../forms/listing/NewListingForm";
import Modal from "./Modal";

const NewListingModal = () => {
  const { toggleNewListingModal } = useModals();

  const body = (
    <>
      <NewListingForm />
    </>
  );

  return (
    <>
      <Modal
        title="Airbnb your home"
        closeModal={toggleNewListingModal}
        body={body}
      />
    </>
  );
};

export default NewListingModal;
