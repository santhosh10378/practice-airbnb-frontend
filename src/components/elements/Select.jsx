const Select = ({ options, label, register, id, watch }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-900">
        {label}
      </label>

      <select
        name={id}
        id={id}
        className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-gray-700 sm:text-sm"
        {...register(id)}
        value={watch(id)}
      >
        <option value="">{`Please select ${label.toLowerCase()}`}</option>
        {options?.map((item, i) => (
          <option key={i} value={JSON.stringify(item)}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
