const Input = ({ type, errors, id, label, disabled, register }) => {
  const inputClasses =
    "peer w-full border-none bg-transparent p-3 font-normal text-sm placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 disabled:opacity-80";
  const labelBaseClasses =
    "relative block rounded-md border border-gray-200 shadow-sm focus-within:ring-1";
  const labelErrorClasses =
    "focus-within:border-red-500 focus-within:ring-red-500";
  const labelNormalClasses =
    "focus-within:border-black focus-within:ring-black";

  return (
    <div>
      <label
        className={`${labelBaseClasses} ${
          errors[id] ? labelErrorClasses : labelNormalClasses
        }`}
      >
        <input
          type={type}
          id={id}
          className={inputClasses}
          placeholder={label}
          disabled={disabled}
          {...register(id, { valueAsNumber: type === "number" ? true : false })}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs font-medium text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          {label}
        </span>
      </label>

      {errors[id] && (
        <p className="mt-1 text-xs font-medium text-red-500">
          {errors[id]?.message}
        </p>
      )}
    </div>
  );
};

export default Input;
