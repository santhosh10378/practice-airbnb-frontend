import useModals from "../../hooks/useModals";
import Heading from "../Heading";
import AuthForm from "../forms/auth/AuthForm";
import Modal from "./Modal";

const RegisterModal = () => {
  const { toggleRegisterModal } = useModals();

  const body = (
    <>
      <div className="space-y-4">
        <Heading variant="signUp" />
        <AuthForm />
      </div>
    </>
  );

  return (
    <>
      <Modal title="Register" closeModal={toggleRegisterModal} body={body} />
    </>
  );
};

export default RegisterModal;
