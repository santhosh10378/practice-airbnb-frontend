import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import authSchema from "../../../schemas/authSchema";
import useModals from "../../../hooks/useModals";
import useAuth from "../../../hooks/useAuth";

const AuthForm = ({ isLogin }) => {
  const { toggleLoginModal, toggleRegisterModal, switchAuthModal } =
    useModals();
  const { registerUser, loginUser } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    if (isLogin) {
      await loginUser(data);
      toggleLoginModal();
    } else {
      await registerUser(data);
      toggleRegisterModal();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between gap-4 h-[85%]"
    >
      <div className="space-y-4">
        {!isLogin && (
          <Input
            type="text"
            errors={errors}
            id="name"
            label="Name"
            register={register}
          />
        )}
        <Input
          type="email"
          errors={errors}
          id="email"
          label="Email"
          register={register}
        />
        <Input
          type="password"
          errors={errors}
          id="password"
          label="Password"
          register={register}
        />
      </div>
      <div className="space-y-2 ">
        <Button>Submit</Button>
        {isLogin ? (
          <p className="text-center text-sm">
            Don't have an account?{" "}
            <span
              className="transition hover:underline font-medium cursor-pointer"
              onClick={switchAuthModal}
            >
              Register
            </span>
          </p>
        ) : (
          <p className="text-center text-sm">
            Already have an account?{" "}
            <span
              className="transition hover:underline font-medium cursor-pointer"
              onClick={switchAuthModal}
            >
              Login
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default AuthForm;
