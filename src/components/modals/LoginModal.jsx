import useModals from "../../hooks/useModals";
import Heading from "../Heading";
import AuthForm from "../forms/auth/AuthForm";
import Modal from "./Modal";

const LoginModal = () => {
  const { toggleLoginModal } = useModals();

  const body = (
    <>
      <div className="space-y-4 h-full">
        <Heading variant="signIn" />
        <AuthForm isLogin />
      </div>
    </>
  );

  return (
    <>
      <Modal title="Login" closeModal={toggleLoginModal} body={body} />
    </>
  );
};

export default LoginModal;
