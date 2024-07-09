import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  variant = "primary",
  className,
  disabled,
  onClick,
  type,
}) => {
  const classes = {
    primary: twMerge(
      `w-full rounded-md bg-rose-500 p-3 text-sm font-medium text-white transition hover:opacity-80 disabled:opacity-80`,
      className
    ),
    secondary: twMerge(
      `w-full rounded-md border border-black p-3 text-sm font-medium transition hover:opacity-50 disabled:opacity-50`,
      className
    ),
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classes[variant] || className}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
