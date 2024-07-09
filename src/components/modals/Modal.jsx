import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ title, closeModal, body }) => {
  return (
    <div className="absolute inset-0 z-[100] h-screen max-h-screen w-full bg-black/80">
      <div className="flex h-full items-center justify-center">
        <div className="inner-animation relative h-screen w-full  bg-white md:h-auto md:w-[50%] md:rounded-lg lg:w-[30%]">
          <div className="flex items-center justify-center p-5 pb-2">
            <IoCloseOutline
              size={20}
              onClick={closeModal}
              className="absolute right-5 top-5 cursor-pointer transition"
            />
            <h3 className="font-medium">{title}</h3>
          </div>
          <div className="h-full p-5">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
